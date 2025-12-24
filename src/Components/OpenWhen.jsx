import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import useTypewriter from "../hooks/useTypewriter";

const letters = [
  {
    title: "Open when you miss me 💭",
    message:
      "Close your eyes and imagine me holding your hand 🤍\nI'm always with you, even when I'm not there physically.",
  },
  {
    title: "Open when you need a smile 😊",
    message:
      "Hey youuu 😚\nYour smile is my favorite thing in the world.\nPlease smile right now… yes, that one 💕",
  },
  {
    title: "Open when you're sad 😢",
    message:
      "Come here 🤍\nIt's okay to feel sad sometimes.\nI'm proud of you and I love you more than you know 🌸",
  },
  {
    title: "Open when you feel lonely 🌙",
    message:
      "You're never alone, my love.\nEven the moon reminds me of you tonight ✨",
  },
  
  // 🌸 NEW — ANGRY
  {
    title: "Open when you're angry 😤",
    message:
      "Hey… hey… breathe with me first 🤍\nInhale… exhale… slowly.\n\nI know something hurt you, and your feelings are valid.\nBut remember this — I love you even in your anger.\nCome here, let me hug you tight 🫂\nEverything will be okay, I promise 💕",
  },

  // ❤️ NEW — LOVE
  {
    title: "Open when you feel love ❤️",
    message:
      "If your heart feels warm right now, then it’s because of us 💞\n\nI love the way you love.\nI love the way your heart feels things so deeply.\nAnd I want you to know…\nEvery bit of love you feel is returned to you — double ♾️\nAlways yours 🤍",
  },
];

export default function OpenWhen() {
  const [openLetter, setOpenLetter] = useState(null);
  const navigate = useNavigate();

  // ✅ typewriter now depends on selected envelope
  const typedText = useTypewriter(
    openLetter ? openLetter.message : "",
    35
  );

  return (
    <div className="min-h-screen relative overflow-hidden px-4 py-16 text-white
      bg-gradient-to-b from-[#050814] via-[#0b1d3a] to-black">

      {/* 🌌 Universe Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,80,255,0.15),transparent_40%),
        radial-gradient(circle_at_70%_60%,rgba(255,80,150,0.12),transparent_45%)]" />

      {/* ⭐ Slow Universe Stars */}
      {[...Array(70)].map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white opacity-80 animate-[twinkle_6s_ease-in-out_infinite]"
          style={{
            width: Math.random() * 3 + 2 + "px",
            height: Math.random() * 3 + 2 + "px",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            animationDelay: `${Math.random() * 6}s`,
          }}
        />
      ))}

      {/* 🌠 Rare Shooting Stars */}
      {[...Array(4)].map((_, i) => (
        <span
          key={`shoot-${i}`}
          className="absolute h-[1px] w-24 bg-gradient-to-r from-white to-transparent
            animate-[shoot_8s_linear_infinite]"
          style={{
            top: Math.random() * 60 + "%",
            left: Math.random() * 80 + "%",
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <h1 className="relative z-10 text-center text-[clamp(2rem,6vw,3rem)]
        font-semibold mb-14">
        Open When… 💌
      </h1>

      {/* ✉️ Envelopes */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {letters.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpenLetter(item)}
            className="cursor-pointer bg-white/10 backdrop-blur-xl
              border border-white/20 rounded-2xl p-6 shadow-xl text-center"
          >
            <div className="text-4xl mb-4">✉️</div>
            <p className="text-pink-300 font-medium">{item.title}</p>
          </motion.div>
        ))}
      </div>

      {/* 💌 Open Letter */}
      <AnimatePresence>
        {openLetter && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center px-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.6, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.6 }}
              className="bg-[#fff7f0] text-[#3b2f2f]
                rounded-3xl p-8 max-w-md w-full shadow-2xl relative"
            >
              <button
                onClick={() => setOpenLetter(null)}
                className="absolute top-3 right-4 text-xl"
              >
                ✖
              </button>

              <h2 className="text-center font-semibold text-xl mb-4">
                💌 A Letter For You
              </h2>

              <p className="whitespace-pre-line text-center leading-relaxed font-medium">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation */}
      <div className="relative z-10 mt-16 flex justify-center gap-4">
        <button
          onClick={() => navigate("/song")}
          className="px-6 py-3 rounded-full bg-white/20 hover:bg-white/30"
        >
          ← Back
        </button>
        <button
          onClick={() => navigate("/bubble")}
          className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 shadow-lg"
        >
          Final Surprise 💖
        </button>
      </div>
    </div>
  );
}
