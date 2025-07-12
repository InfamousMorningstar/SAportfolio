/*
 * ███╗░░░███╗░█████╗░██████╗░██████╗░██╗░░░██╗███████╗██████╗░██████╗░
 * ████╗░░████║██╔══██╗██╔══██╗██╔══██╗██║░░░██║██╔════╝██╔══██╗██╔══██╗
 * ██╔████╔██║███████║██████╔╝██████╔╝██║░░░██║█████╗░░██████╔╝██████╔╝
 * ██║╚██╔╝██║██╔══██║██╔══██╗██╔══██╗██║░░░██║██╔══╝░░██╔══██╗██╔══██╗
 * ██║░╚═╝░██║██║░░██║██║░░██║██║░░██║╚██████╔╝███████╗██║░░██║██║░░██║
 * ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝
 *
 * 👤 Author  : Salman Ahmad
 * 🌐 URL     : https://portfolio.ahmxd.net
 * 📧 Contact : s.ahmad0147@gmail.com
 * 📝 License : MIT (Educational/Personal Use)
 * 📁 File    : ScrollToTopArrow.tsx
 * 🕒 Updated : Jul 11, 2025
 */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function ScrollToTopArrow() {
  const [show, setShow] = useState(false);
  const [footerTop, setFooterTop] = useState<number | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);
  const footerRef = useRef<HTMLElement | null>(null);
  const arrowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    contactRef.current = document.getElementById("contact");
    footerRef.current = document.querySelector("footer");
    if (!contactRef.current || !footerRef.current) return;

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;
    let timeout: ReturnType<typeof setTimeout> | null = null;
    const handle = () => {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => {
        const contactRect = contactRef.current!.getBoundingClientRect();
        const footerRect = footerRef.current!.getBoundingClientRect();
        const shouldShow =
          contactRect.bottom < window.innerHeight - 80 &&
          footerRect.top > window.innerHeight / 2;
        setShow(shouldShow);
        setFooterTop(footerRef.current!.offsetTop);
      }, isDesktop ? 60 : 40);
    };
    window.addEventListener("scroll", handle);
    window.addEventListener("resize", handle);
    handle();
    return () => {
      window.removeEventListener("scroll", handle);
      window.removeEventListener("resize", handle);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate the absolute position above the footer
  let style: React.CSSProperties = {
    pointerEvents: show ? "auto" : "none",
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
    zIndex: 60,
    userSelect: "none",
    cursor: show ? "pointer" : "default",
  };
  if (footerTop !== null) {
    style.top = footerTop - 56;
  }

  // S-tier spring animation config
  const spring = {
    type: "spring",
    stiffness: 120,
    damping: 18,
    mass: 0.7,
  };

  return (
    <motion.div
      ref={arrowRef}
      style={style}
      layout
      initial={false}
      animate={show ? { opacity: 1, y: 0, pointerEvents: "auto" } : { opacity: 0, y: 40, pointerEvents: "none" }}
      aria-label="Scroll to top"
      role="button"
      tabIndex={show ? 0 : -1}
      onClick={show ? handleClick : undefined}
      onKeyDown={e => {
        if (show && (e.key === "Enter" || e.key === " ")) handleClick();
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 180, damping: 28, mass: 1.1 }}
    >
      <motion.div
        className="text-accent text-3xl select-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        ↑
      </motion.div>
    </motion.div>
  );
}
