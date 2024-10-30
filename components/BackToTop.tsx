"use client";
import React, { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <a
      onClick={backToTop}
      className={twMerge(
        "flex items-center justify-center invisible fixed opacity-0 right-5 md:right-10 bottom-5 md:bottom-10 z-[9999] bg-primary w-10 h-10 transition-all rounded-[50%] cursor-pointer",
        scroll > 100 ? "visible opacity-100" : ""
      )}
    >
      <FaArrowUp className="text-sm text-white" />
    </a>
  );
}

export default BackToTop;
