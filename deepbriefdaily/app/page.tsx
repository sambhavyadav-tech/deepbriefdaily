// import NewsCard from "../components/NewsCards";

// const dummyNews = [
//   {
//     id: 1,
//     title: "🚀 AI Breakthrough: Chatbots Now Predict Stock Market Trends!",
//     summary: "Researchers have trained AI models to forecast stock market movements with 85% accuracy.",
//     image: "/news1.jpg",
//     category: "Technology",
//   },
//   {
//     id: 2,
//     title: "🌍 Climate Crisis: AI Helps Detect Deforestation in Real Time",
//     summary: "AI-powered satellites now track deforestation, providing real-time alerts to conservationists.",
//     image: "/news2.jpg",
//     category: "Environment",
//   },
//   {
//     id: 3,
//     title: "🏆 Sports Analytics: AI Coaches Now Powering Premier League Teams",
//     summary: "AI-driven analytics are revolutionizing sports strategies, helping teams optimize performance.",
//     image: "/news3.jpg",
//     category: "Sports",
//   },
// ];

// export default function Home() {
//   return (
//     <section className="homepage">
//       <h1>📰 DeepBriefDaily – AI-Powered News Summaries</h1>
//       <p>Get the latest news in a flash, curated and summarized by AI.</p>

//       <div className="news-grid">
//         {dummyNews.map((news) => (
//           <NewsCard key={news.id} news={news} />
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import { useState, useEffect } from "react";
import NewsCard from "../components/NewsCard";

export default function Home() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("/api/scrape");
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching scraped news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="homepage">
      <h1>📰 DeepBriefDaily – AI-Powered News Summaries</h1>
      <p>Get the latest headlines from top news sources.</p>

      <div className="news-grid">
        {news.length > 0 ? (
          news.map((article, index) => <NewsCard key={index} news={article} />)
        ) : (
          <p>Loading news...</p>
        )}
      </div>
    </section>
  );
}