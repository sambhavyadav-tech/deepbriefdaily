"use client"; // Needed for interactivity in App Router

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="header">
      <div className="container">
        {/* Logo */}
        <Link href="/" className="logo">
          <span>📰 DeepBriefDaily</span>
        </Link>

        {/* Navigation */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/trending">Trending</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/about">About</Link>
        </nav>

        {/* Dark Mode Toggle */}
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
}
