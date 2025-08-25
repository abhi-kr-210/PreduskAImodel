"use client";
import React from "react";

const Background: React.FC = () => {
  return (
<div className="fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-gradient-to-br from-[#0a192f] via-[#112240] to-white/10">
      {Array.from({ length: 40 }).map((_, i) => {
        const isCircle = Math.random() > 0.5;
        const size = 8 + Math.random() * 20;

        return (
          <span
            key={i}
            className={`absolute ${
              isCircle ? "rounded-full" : "rounded-md"
            } bg-gradient-to-r from-pink-500/40 to-cyan-400/40 animate-float`}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        );
      })}
    </div>
  );
};

export default Background;
