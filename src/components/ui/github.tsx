"use client";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
};

export const GithubGraph = ({
  username,
  blockMargin,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      
      console.error(`Error fetching contribution data: ${errorMessage}`);
      setContribution([]);
    } finally {
      setIsLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const label = {
    totalCount: `{{count}} contributions in the last year`,
  };

  return (
    <>
      <ActivityCalendar
        data={contribution}
        maxLevel={4}
        blockSize={11}
        blockRadius={2}
        blockMargin={blockMargin ?? 3}
        weekStart={0}
        showWeekdayLabels={["mon", "wed", "fri"]}
        loading={loading}
        labels={label}
        theme={{
          light: [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
          ],
          dark: [
            "#161b22",
            "#0e4429",
            "#006d32",
            "#26a641",
            "#39d353",
          ],
        }}
      />
    </>
  );
};
async function fetchContributionData(username: string): Promise<Activity[]> {
  // Use a reliable public endpoint that returns { total, contributions: Activity[] }
  const response = await fetch(
    `https://github-contributions-api.jogruber.de/v4/${username}`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    const text = await response.text().catch(() => '');
    throw Error(`Error fetching contribution data (${response.status}): ${text}`);
  }

  const responseBody = await response.json();
  // The API returns an array shaped for react-activity-calendar already
  // { date: string, count: number, level: 0..4 }
  const all: Activity[] = responseBody.contributions as Activity[];

  // Keep only the last 365 days (GitHub shows last year)
  const today = new Date();
  const yearAgo = new Date(today);
  yearAgo.setFullYear(today.getFullYear() - 1);

  const filtered = all.filter((d) => {
    const dt = new Date(d.date);
    return dt >= yearAgo && dt <= today;
  });

  // Sort ascending by date for stable rendering
  filtered.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

  return filtered;
}
