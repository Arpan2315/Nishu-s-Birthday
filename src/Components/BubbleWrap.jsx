import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
const qualities = [
  "Your Smile 😊",
  "Your Kind Heart 💖",
  "Your Care 🤍",
  "Your Patience 🌸",
  "Your Love 💞",
  "Your Voice 🎶",
  "Your Laugh 😄",
  "Your Anger 😤",
  "Your Support 🫂",
  "Your Soul ✨",
];



export default function BubbleWrap() {
  const [popped, setPopped] = useState([]);
  const [positions, setPositions] = useState([]);
  const navigate = useNavigate();

  // 🎈 Random positions (screen width ke andar)
  useEffect(() => {
    const pos = qualities.map(() => ({
      x: Math.random() * 80 + 5, // 5%–85%
      y: Math.random() * 60 + 20, // 20%–80%
      delay: Math.random() * 4,
      duration: Math.random() * 4 + 6,
    }));
    setPositions(pos);
  }, []);

  const handlePop = (index) => {
    if (!popped.includes(index)) {
      setPopped((prev) => [...prev, index]);
    }
  };

  const allPopped = popped.length === qualities.length;

  return (
    <div className="relative min-h-screen overflow-hidden
      bg-gradient-to-b from-[#050814] via-[#0b1d3a] to-black text-white">

      {/* 🌙 Moon */}
      <div className="absolute top-8 left-8 w-20 h-20 rounded-full
        bg-[#fff8dc] shadow-[0_0_60px_25px_rgba(255,248,220,0.35)]" />

      {/* 🐦 Shadow Birds */}
      {[...Array(4)].map((_, i) => (
        <span
          key={i}
          className="absolute bird"
          style={{ top: `${15 + i * 8}%`, animationDelay: `${i * 3}s` }}
        />
      ))}

      {/* 🌲 Tree */}
      <div className="absolute bottom-16 left-4 text-[110px] opacity-80">🌲</div>

      {/* 🏔 Snow Mountains */}
      <div className="absolute bottom-0 w-full h-44
        bg-gradient-to-t from-white/30 to-transparent blur-sm" />
        
        <div className="relative z-10 pt-10 pb-6 text-center">
  <h1 className="text-[clamp(1.6rem,4vw,2.5rem)] font-semibold text-pink-300">
    Pop all the bubbles 🫧
  </h1>
  <p className="mt-2 text-white/80 text-sm sm:text-base">
    Har bubble mein meri feelings chhupi hain 💖  
    Sabko pop karo aur surprise unlock karo 🎁
  </p>
</div>

      {/* 🫧 BUBBLES */}
      {qualities.map((text, index) => {
        if (popped.includes(index)) return null;

        const p = positions[index];
        if (!p) return null;

        return (
          <motion.div
            key={index}
            onClick={() => handlePop(index)}
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              y: [0, -20, 0],
              x: [0, 10, -10, 0],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
            className="absolute cursor-pointer select-none
              w-28 h-28 sm:w-32 sm:h-32 rounded-full
              bg-gradient-to-br from-pink-300 to-pink-500
              flex items-center justify-center text-center
              font-medium shadow-2xl backdrop-blur-sm"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
            }}
          >
            {text}
          </motion.div>
        );
      })}

      {/* 🎉 FINAL MESSAGE */}
     {/* 🎉 FINAL MESSAGE */}
<AnimatePresence>
  {allPopped && (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{ opacity: 1, scale: 1 }}
      className="absolute inset-0 flex items-center justify-center px-4 z-20"
    >
      <div
        className="bg-white/10 backdrop-blur-xl
        border border-white/20 rounded-3xl
        p-10 max-w-md text-center shadow-2xl"
      >
        <h2 className="text-2xl font-semibold text-pink-300 mb-4">
          🎂 Happy Birthday My Love 🎂
        </h2>

        <p className="text-white/90 leading-relaxed mb-8">
          Just like these bubbles, you filled my life with color 💕  
          I love you endlessly, today and always ♾️
        </p>

        {/* 🔘 Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 rounded-full
              bg-white/20 hover:bg-white/30
              transition"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/anger")}
            className="px-6 py-3 rounded-full
              bg-pink-500 hover:bg-pink-600
              shadow-lg transition"
          >
            Next 💖
          </button>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

    </div>
  );
}
