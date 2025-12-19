"use client";

import { useEffect } from "react";

export default function NavbarFooterObserver() {
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const sentinel = document.getElementById("footer-sentinel");

    if (!navbar || !sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          navbar.classList.add("navbar--release");
        } else {
          navbar.classList.remove("navbar--release");
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(sentinel);

    return () => observer.disconnect();
  }, []);

  return null;
}
