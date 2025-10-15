import { NextResponse } from "next/server";

interface GitHubContribution {
  date: string;
  count: number;
  level: number;
}

async function fetchWithGraphQL(username: string): Promise<GitHubContribution[]> {
  const query = `
    query($userName: String!) {
      user(login: $userName) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${process.env.GITHUB_TOKEN || ''}`,
      'User-Agent': 'Mozilla/5.0'
    },
    body: JSON.stringify({
      query,
      variables: { userName: username }
    }),
    cache: 'no-store'
  });

  if (!response.ok) {
    throw new Error(`GraphQL request failed: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`GraphQL errors: ${JSON.stringify(data.errors)}`);
  }

  const weeks = data.data?.user?.contributionsCollection?.contributionCalendar?.weeks || [];
  const contributions: GitHubContribution[] = [];

  for (const week of weeks) {
    for (const day of week.contributionDays) {
      const levelMap: Record<string, number> = {
        'NONE': 0,
        'FIRST_QUARTILE': 1,
        'SECOND_QUARTILE': 2,
        'THIRD_QUARTILE': 3,
        'FOURTH_QUARTILE': 4
      };

      contributions.push({
        date: day.date,
        count: day.contributionCount,
        level: levelMap[day.contributionLevel] ?? 0
      });
    }
  }

  return contributions;
}

async function fetchWithScraping(username: string): Promise<GitHubContribution[]> {
  const res = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`GitHub returned ${res.status}`);
  }

  const html = await res.text();
  const activity: GitHubContribution[] = [];
  
  // Match the current GitHub HTML structure: <td ... data-date="YYYY-MM-DD" ... data-level="N" ...>
  const contributionRegex = /<td[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"[^>]*>/g;
  let match: RegExpExecArray | null;
  
  while ((match = contributionRegex.exec(html)) !== null) {
    const date = match[1];
    const level = Number(match[2]);
    // Estimate count from level (GitHub doesn't expose exact counts in HTML)
    const count = level === 0 ? 0 : level * 3;
    activity.push({ date, count, level });
  }

  if (activity.length === 0) {
    throw new Error('No contribution data found in HTML');
  }

  return activity;
}

function generateFallbackData(): GitHubContribution[] {
  const today = new Date();
  const activity: GitHubContribution[] = [];
  
  for (let i = 364; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const date = d.toISOString().slice(0, 10);
    activity.push({ date, count: 0, level: 0 });
  }
  
  return activity;
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const username = searchParams.get("username");

    if (!username) {
      return NextResponse.json(
        { error: "Missing required query param: username" },
        { status: 400 }
      );
    }

    let activity: GitHubContribution[] = [];

    // Try GraphQL first (requires GITHUB_TOKEN in .env)
    if (process.env.GITHUB_TOKEN) {
      try {
        console.log('Attempting to fetch via GraphQL API...');
        activity = await fetchWithGraphQL(username);
        console.log(`GraphQL: Fetched ${activity.length} days of contributions`);
      } catch (error) {
        console.error('GraphQL fetch failed:', error instanceof Error ? error.message : error);
        activity = [];
      }
    }

    // Fall back to scraping if GraphQL failed or no token
    if (activity.length === 0) {
      try {
        console.log('Attempting to fetch via HTML scraping...');
        activity = await fetchWithScraping(username);
        console.log(`Scraping: Fetched ${activity.length} days of contributions`);
      } catch (error) {
        console.error('Scraping failed:', error instanceof Error ? error.message : error);
        activity = [];
      }
    }

    // Final fallback to empty data
    if (activity.length === 0) {
      console.warn("All methods failed. Returning fallback data.");
      activity = generateFallbackData();
    }

    activity.sort((a, b) => {
      if (a.date < b.date) return -1;
      if (a.date > b.date) return 1;
      return 0;
    });

    return NextResponse.json({ contributions: activity }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Error in github-contributions API:", message);
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
