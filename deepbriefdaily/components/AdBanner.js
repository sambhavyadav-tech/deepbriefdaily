// components/AdBanner.js
'use client'
import { useEffect } from "react";

export default function AdBanner({ slot, format }) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.error("AdSense Error:", err);
    }
  }, []);

  return (
    <div className="ad">
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="YOUR_ADSENSE_ID"
           data-ad-slot={slot}
           data-ad-format={format}></ins>
    </div>
  );
}