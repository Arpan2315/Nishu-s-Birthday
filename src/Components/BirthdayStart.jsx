import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import React from "react";
import '../App.css';

export default function BirthdayStart() {
  const navigate = useNavigate();
  useEffect(() => {
  const createTrail = (x, y) => {
    const el = document.createElement("span");
    el.className = "cursor-trail";
    el.style.left = x + "px";
    el.style.top = y + "px";
    el.innerText = Math.random() > 0.5 ? "💖" : "✨";

    document.body.appendChild(el);

    setTimeout(() => {
      el.remove();
    }, 1200);
  };

  const mouseMove = (e) => {
    createTrail(e.clientX, e.clientY);
  };

  const touchMove = (e) => {
    if (e.touches.length > 0) {
      createTrail(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("touchmove", touchMove);

  return () => {
    window.removeEventListener("mousemove", mouseMove);
    window.removeEventListener("touchmove", touchMove);
  };
}, []);


  return (
    <div className="min-h-screen w-full flex items-center justify-center
      bg-gradient-to-b from-[#0b0d2a] via-[#141852] to-black
      relative overflow-hidden px-4">

      {/* ✨ Night Sky Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {/* ⭐ Twinkling Stars */}
        {[...Array(45)].map((_, i) => ( 
          <span
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              width: Math.random() * 2 + 1 + "px",
              height: Math.random() * 2 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}

        {/* 🌠 Shooting / Falling Stars */}
        {[...Array(7)].map((_, i) => (
          <span
            key={`fall-${i}`}
            className="absolute h-[1px] w-14
              bg-gradient-to-r from-white to-transparent
              animate-fall"
            style={{
              top: Math.random() * 70 + "%",
              left: Math.random() * 80 + "%",
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* 🌙 Moon */}
      <div className="absolute top-8 right-6 sm:top-14 sm:right-20
        w-20 h-20 sm:w-28 sm:h-28 rounded-full
        bg-[#fff8dc] shadow-[0_0_45px_#fff8dc]" />

      {/* 💌 Main Card */}
      <div className="relative z-10 w-full max-w-[420px] sm:max-w-[520px]
        bg-white/10 backdrop-blur-xl border border-white/20
        rounded-3xl p-6 sm:p-10 text-center shadow-2xl">

        {/* Title */}
        <h1 className="text-white font-semibold leading-tight mb-3
          text-[clamp(2rem,7vw,3.2rem)]">
          Happy Birthday
        </h1>

        <h2 className="text-pink-300 italic mb-5
          text-[clamp(1.2rem,4vw,1.8rem)]">
          My Love 💖
        </h2>

        {/* 💑 Couple Image + local stars */}
        <div className="relative mx-auto w-[200px] sm:w-[260px] mb-6">
          {/* tiny sparkles around image */}
          {[...Array(10)].map((_, i) => (
            <span
              key={`img-star-${i}`}
              className="absolute rounded-full bg-white animate-twinkle"
              style={{
                width: "2px",
                height: "2px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}

          <img
            src="/images/momo2.jpg"
            alt="Cute Couple"
            className="relative z-10 w-full drop-shadow-2xl"
            draggable="false"
          />
        </div>

        {/* Message */}
        <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-6">
          Tonight the stars shine a little brighter 🌟  
          because it’s your special day.  
          I made this little sky just for you 💕
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/memory")}
          className="w-full py-3 rounded-full
            bg-pink-500 hover:bg-pink-600
            transition-all text-white font-medium text-lg shadow-lg
            active:scale-95"
        >
          Start the Surprise 🎁
        </button>
      </div>
    </div>
  );
}
