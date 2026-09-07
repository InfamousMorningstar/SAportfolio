"use client";
import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? scrollTop / docHeight : 0;
      setScroll(scrolled);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      // print:hidden — this is a reading aid, and it was printing as a stray
      // rule across the middle of the resume PDF.
      className="fixed top-0 left-0 w-full h-1 z-50 bg-transparent print:hidden"
      style={{ pointerEvents: "none" }}
    >
      <div
        className="h-full bg-accent transition-all duration-200"
        style={{ width: `${scroll * 100}%` }}
      />
    </div>
  );
}
