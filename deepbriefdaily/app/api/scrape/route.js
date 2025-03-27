import Parser from "rss-parser";

export async function GET() {
  try {
    const parser = new Parser();
    const feed = await parser.parseURL("https://news.google.com/rss?hl=en-US&gl=US&ceid=US:en"); // Google News RSS
    const newsData = feed.items.slice(0, 10).map((item) => ({
      title: item.title,
      link: item.link,
      description: item.contentSnippet || item.summary || "No description available.",
      image: item.enclosure?.url || "/placeholder.jpg",
    }));

    return new Response(JSON.stringify(newsData), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch Google News RSS" }), { status: 500 });
  }
}