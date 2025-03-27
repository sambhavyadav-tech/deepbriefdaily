import Link from "next/link";

export default function NewsCard({ news }) {
  return (
    <div className="news-card">
      {/* <img src={news.image} alt={news.title} /> */}
      <div className="news-content">
        {/* <span className="category">{news.category}</span> */}
        <h2>{news.title}</h2>
        <p>{news.description}</p>
        <Link href={news.link} passHref legacyBehavior>
          <a className="read-more">
          Read More →
          </a>
        </Link>
      </div>
    </div>
  );
}