import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function StressReliefGame() {
  const [taps, setTaps] = useState(0);
  const [hugMode, setHugMode] = useState(false);

  const x = useMotionValue(0);
  const rotate = useTransform(x, [-100, 100], [-20, 20]);

  // 🔊 soft pop sound
  const popSound = new Audio("/sounds/pop.mp3");

  const calmProgress = Math.min((taps / 10) * 100, 100);

  const handleTap = () => {
    if (hugMode) return;

    setTaps((prev) => prev + 1);

    // physics feel
    x.set(Math.random() * 120 - 60);

    // sound
    popSound.currentTime = 0;
    popSound.play();

    // 📳 mobile vibration
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }

    // unlock hug
    if (taps + 1 >= 10) {
      setTimeout(() => setHugMode(true), 600);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center
      bg-gradient-to-b from-[#050814] via-[#0b1d3a] to-black text-white
      relative overflow-hidden px-4">

      {/* 🌙 Moon */}
      <div className="absolute top-8 right-8 w-20 h-20 rounded-full
        bg-[#fff8dc] shadow-[0_0_60px_#fff8dc]" />

      {/* 🧘 Title */}
      <h1 className="text-center text-[clamp(1.6rem,5vw,2.6rem)]
        font-semibold mb-6">
        Tap to Release Your Stress 🤍
      </h1>

      {/* 😌 Calm Meter */}
      <div className="w-full max-w-xs mb-10">
        <div className="h-3 rounded-full bg-white/20 overflow-hidden">
          <motion.div
            className="h-full bg-pink-400"
            animate={{ width: `${calmProgress}%` }}
          />
        </div>
        <p className="text-center text-sm mt-2 text-white/70">
          Calm Level {Math.round(calmProgress)}%
        </p>
      </div>

      {/* 🧍 Dummy / Hug */}
      {!hugMode ? (
        <motion.div
          onClick={handleTap}
          style={{ x, rotate }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="cursor-pointer select-none
            w-40 h-60 rounded-full
            bg-gradient-to-b from-gray-300/40 to-gray-700/60
            flex items-center justify-center
            shadow-[0_20px_60px_rgba(255,255,255,0.15)]"
        >
          <span className="text-sm text-white/80 text-center px-4">
            Tap Me <br /> Let it out
          </span>
        </motion.div>
      ) : (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex flex-col items-center"
        >
          <div className="text-7xl mb-4 animate-pulse">🤗</div>
          <h2 className="text-pink-300 text-2xl font-semibold mb-2">
            Hug Me Instead
          </h2>
          <p className="text-white/80 text-center max-w-xs">
            You don’t need anger now.  
            I’m right here with you 🤍
          </p>
        </motion.div>
      )}

      {/* 💕 Floating Hearts */}
      {hugMode &&
        [...Array(10)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-400"
            initial={{
              opacity: 0,
              y: 0,
              x: Math.random() * 200 - 100,
            }}
            animate={{
              opacity: [0, 1, 0],
              y: -200,
            }}
            transition={{
              duration: 3,
              delay: i * 0.3,
            }}
            style={{ bottom: "20%" }}
          >
            ❤️
          </motion.span>
        ))}
    </div>
  );
}
