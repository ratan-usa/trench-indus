"use client"; // Required in Next.js App Router for state & scroll listeners

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Phone, Mail, MessageCircle, ArrowUp } from "lucide-react";

const FixedQuoteBtn = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Show scroll button when page is scrolled down past 300px
  // Also calculate scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Visibility
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Progress calculation
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? Math.round((winScroll / height) * 100) : 0;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Circle math: radius 22, circumference = 2 * PI * 22 ~= 138.2
  const circleCircumference = 138.2;
  const strokeDashoffset = circleCircumference - (circleCircumference * scrollProgress) / 100;

  return (
    <>
      {/* ========================================= */}
      {/* BOTTOM RIGHT FIXED STACK                  */}
      {/* ========================================= */}
      <div className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-4 items-center">

        {/* BOTTOM THREE: Social / Contact Icons */}
        {/* A. WhatsApp */}
        <Link
          href="https://wa.me/15127828880"
          target="_blank"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#CC0000] hover:bg-[#0F0F0F] text-white 
            rounded-full shadow-lg shadow-[#CC0000]/30
            transition-all duration-300 hover:scale-110
          "
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </Link>

        {/* B. Phone Call */}
        <Link
          href="tel:+15127828880"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#CC0000] hover:bg-[#0F0F0F] text-white 
            rounded-full shadow-lg shadow-[#CC0000]/30
            transition-all duration-300 hover:scale-110
          "
          title="Call Us"
        >
          <Phone className="w-5 h-5" />
        </Link>

        {/* C. Email */}
        <Link
          href="mailto:sales@pavingrisers.com"
          className="
            w-12 h-12 flex items-center justify-center 
            bg-[#CC0000] hover:bg-[#0F0F0F] text-white 
            rounded-full shadow-lg shadow-[#CC0000]/30
            transition-all duration-300 hover:scale-110
          "
          title="Send Email"
        >
          <Mail className="w-5 h-5" />
        </Link>

        {/* TOP: Scroll to Top Button with Progress Ring */}
        <div
          className={`relative w-12 h-12 transition-all duration-300 ${isVisible ? "opacity-100 scale-100 mt-2" : "opacity-0 scale-0 pointer-events-none h-0 w-0 !gap-0 !mt-0"}`}
        >
          {/* Background Track Circle */}
          <svg className="absolute inset-0 w-12 h-12 pointer-events-none">
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="#e5e7eb" // slate-200
              strokeWidth="2"
            />
          </svg>

          {/* Progress Circle (Rotated to start at top) */}
          <svg className="absolute inset-0 w-12 h-12 -rotate-90 pointer-events-none">
            <circle
              cx="24"
              cy="24"
              r="22"
              fill="none"
              stroke="#CC0000"
              strokeWidth="2"
              strokeDasharray={circleCircumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-150 ease-out"
            />
          </svg>

          <button
            onClick={scrollToTop}
            className="w-full h-full flex items-center justify-center bg-[#0F0F0F] hover:bg-[#CC0000] text-white rounded-full shadow-lg transition-colors duration-300"
            title="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>

      </div>
    </>
  );
};

export default FixedQuoteBtn;