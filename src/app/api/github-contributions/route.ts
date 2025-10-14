import { NextResponse } from "next/server";

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

    const res = await fetch(`https://github.com/users/${encodeURIComponent(username)}/contributions`, {
      headers: {
        "User-Agent": "nextjs-app"
      },
      cache: "no-store",
    });

    if (!res.ok) {
      const text = await res.text().catch(() => "");
      return NextResponse.json(
        { error: `Upstream error ${res.status}`, details: text.slice(0, 500) },
        { status: 502 }
      );
    }

    const html = await res.text();

    const activity: Array<{ date: string; count: number; level: number }> = [];
    const regex = /data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-count="(\d+)"[^>]*?data-level="(\d)"/g;

    let match: RegExpExecArray | null;
    while ((match = regex.exec(html)) !== null) {
      const date = match[1];
      const count = Number(match[2]);
      const level = Number(match[3]);
      activity.push({ date, count, level });
    }

    activity.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : 0));

    return NextResponse.json({ contributions: activity }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
