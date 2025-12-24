import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import confetti from 'canvas-confetti';
import '../App.css'; // Is CSS ko neeche se copy karo
let confetti;

const ThankYouPage = () => {
  const [cards, setCards] = useState([
    { id: 1, text: "Tumhari smile meri har problem ka solution hai. ❤️", color: "#FF69B4" },
    { id: 2, text: "I'm so happy because you tolerate my madness every day. 🤪", color: "#9370DB" },
    { id: 3, text: "You are the best thing that ever happened to me. 🌟", color: "#FF1493" },
    { id: 4, text: "I promise to fulfill every wish of yours, always. 💍", color: "#DA70D6" },
    { id: 5, text: "Thank you for being my safest home. 🏠💖", color: "#FFB6C1" },
  ]);

  // Initial Confetti Blast
  // useEffect(() => {
  //   const duration = 3 * 1000;
  //   const end = Date.now() + duration;

  //   const frame = () => {
  //     confetti({
  //       particleCount: 2,
  //       angle: 60,
  //       spread: 55,
  //       origin: { x: 0 },
  //       colors: ['#ff69b4', '#ffffff']
  //     });
  //     confetti({
  //       particleCount: 2,
  //       angle: 120,
  //       spread: 55,
  //       origin: { x: 1 },
  //       colors: ['#ff69b4', '#ffffff']
  //     });

  //     if (Date.now() < end) {
  //       requestAnimationFrame(frame);
  //     }
  //   };
  //   frame();
  // }, []);
  useEffect(() => {
  import("canvas-confetti").then((module) => {
    confetti = module.default;

    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#ff69b4", "#ffffff"],
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#ff69b4", "#ffffff"],
      });

      if (Date.now() < end) requestAnimationFrame(frame);
    };

    frame();
  });
}, []);


  const swipeAway = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  return (
    <div className="thankyou-container">
      {/* --- Night Sky Background --- */}
      <div className="stars-container">
        {[...Array(50)].map((_, i) => (
          <div 
            key={i} 
            className="star" 
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* --- Top Header --- */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="header-text"
      >
        <h1 className="thankyou-title">Thank You My World! 🌸</h1>
        <p className="sub-text">Happy Birthday, Cutie! 🎂</p>
      </motion.div>

      {/* --- Card Stack --- */}
      <div className="card-stack">
        <AnimatePresence>
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(_, info) => {
                if (Math.abs(info.offset.x) > 100) swipeAway(card.id);
              }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1 - (cards.length - 1 - index) * 0.05, 
                y: (cards.length - 1 - index) * -10,
                opacity: 1 
              }}
              exit={{ 
                x: Math.random() > 0.5 ? 500 : -500, 
                rotate: 20, 
                opacity: 0 
              }}
              style={{ 
                backgroundColor: card.color,
                zIndex: index 
              }}
              className="thought-card"
            >
              <p>{card.text}</p>
              <span className="swipe-hint">Swipe left/right to read →</span>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* --- Final Interactive Message --- */}
        {cards.length === 0 && (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }} 
            animate={{ scale: 1, opacity: 1 }} 
            className="final-msg-box"
          >
            <motion.div 
               animate={{ scale: [1, 1.2, 1] }} 
               transition={{ repeat: Infinity, duration: 1 }}
               className="heart-icon"
            >❤️</motion.div>
            <h2>I Love You Forever!</h2>
            <p>Hamesha saath rahenge? ✨</p>
            <button 
              className="last-btn"
              onClick={() => confetti({ particleCount: 150, spread: 70, origin: { y: 0.6 } })}
            >
              Yes, Pakka! 💍
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ThankYouPage;