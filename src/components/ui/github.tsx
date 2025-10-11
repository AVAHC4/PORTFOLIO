"use client";
import { useCallback, useEffect, useState } from "react";

import { Activity, ActivityCalendar } from "react-activity-calendar";

type GithubGraphProps = {
  username: string;
  blockMargin?: number;
  colorPallete?: string[];
};

export const GithubGraph = ({
  username,
  blockMargin,
  colorPallete,
}: GithubGraphProps) => {
  const [contribution, setContribution] = useState<Activity[]>([]);
  const [loading, setIsLoading] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    try {
      const contributions = await fetchContributionData(username);
      setContribution(contributions);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      // Do not throw to avoid crashing the client component; show empty calendar instead
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
        blockMargin={blockMargin ?? 2}
        loading={loading}
        labels={label}
        theme={{
          dark: colorPallete ?? [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39",
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
  return responseBody.contributions as Activity[];
}
