import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AdBanner from "../components/AdBanner";
import "./globals.css";

export const metadata = {
  title: "DeepBriefDaily - AI-Powered News Summaries",
  description: "Get real-time, AI-curated news summaries from top sources.",
  keywords:
    "AI news, AI summaries, breaking news, latest headlines, real-time news",
  openGraph: {
    title: "DeepBriefDaily - AI-Powered News Summaries",
    description: "Get real-time, AI-curated news summaries from top sources.",
    url: "https://yourwebsite.com",
    siteName: "DeepBriefDaily",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DeepBriefDaily AI News",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 🔝 Top Banner Ad */}
        <AdBanner slot="TOP_BANNER_SLOT" format="horizontal" />

        <Header />

        {/* 📜 Layout with Sidebars */}
        <div className="container">
          <aside className="sidebar left">
            <AdBanner slot="LEFT_SIDEBAR_SLOT" format="vertical" />
          </aside>

          <main className="content">{children}</main>

          <aside className="sidebar right">
            <AdBanner slot="RIGHT_SIDEBAR_SLOT" format="vertical" />
          </aside>
        </div>

        {/* 🔻 Bottom Banner Ad */}
        <AdBanner slot="BOTTOM_BANNER_SLOT" format="horizontal" />

        <Footer />
      </body>
    </html>
  );
}
