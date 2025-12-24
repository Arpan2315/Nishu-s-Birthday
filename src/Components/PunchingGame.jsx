// // import { useState } from "react";
// // import { motion } from "framer-motion";

// // export default function AngerRelease() {
// //   const [hits, setHits] = useState(0);

// //   return (
// //     <div className="min-h-screen flex flex-col items-center justify-center
// //       bg-gradient-to-b from-[#1a0b2e] via-[#2a145e] to-black text-white px-4">

// //       <h1 className="text-3xl font-semibold mb-2">
// //         Feeling Angry? 😤
// //       </h1>
// //       <p className="text-white/80 mb-8 text-center">
// //         Tap me to release your anger 💖  
// //         (Cartoon only 😄)
// //       </p>

// //       {/* Characters */}
// //       <div className="relative flex items-center gap-10">

// //         {/* Girl */}
// //         <motion.div
// //           whileTap={{ scale: 0.9 }}
// //           className="text-7xl cursor-pointer select-none"
// //           onClick={() => setHits(h => h + 1)}
// //         >
// //           👩
// //         </motion.div>

// //         {/* Boy */}
// //         <motion.div
// //           animate={{
// //             rotate: hits ? [0, -10, 10, -5, 0] : 0,
// //             x: hits ? [0, -10, 10, -5, 0] : 0,
// //           }}
// //           transition={{ duration: 0.4 }}
// //           className="text-7xl select-none"
// //         >
// //           🧑
// //         </motion.div>

// //         {/* POW Text */}
// //         {hits > 0 && (
// //           <motion.span
// //             key={hits}
// //             initial={{ scale: 0, opacity: 0 }}
// //             animate={{ scale: 1, opacity: 1 }}
// //             exit={{ opacity: 0 }}
// //             className="absolute top-0 right-0 text-pink-400 font-bold"
// //           >
// //             POW! 💥
// //           </motion.span>
// //         )}
// //       </div>

// //       {/* Anger Meter */}
// //       <div className="mt-10 w-64">
// //         <p className="text-center mb-2">
// //           Anger Level
// //         </p>
// //         <div className="h-3 bg-white/20 rounded-full overflow-hidden">
// //           <motion.div
// //             className="h-full bg-pink-500"
// //             animate={{ width: `${Math.max(0, 100 - hits * 10)}%` }}
// //           />
// //         </div>
// //       </div>

// //       {hits >= 8 && (
// //         <p className="mt-6 text-green-300 text-center">
// //           Feeling better now? 😌💖  
// //           Come here 🤍
// //         </p>
// //       )}
// //     </div>
// //   );
// // }
// // src/PunchingGame.jsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// // import useSound from 'use-sound';
// // import punchSound from './assets/punch.mp3'; // Ye sound file aapko khud add karni padegi
// // import slapSound from './assets/slap.mp3';   // Ye bhi

// // Apni aur uski images yahan import karo
// //import gfAvatar from './assets/gf-avatar.png'; // Uski cute avatar
// //import myAvatar from './assets/my-avatar.png'; // Tumhari punching bag avatar
// //import hugGif from './assets/hug-animation.gif'; // Ek cute hug GIF

// function PunchingGame() {
//   const [hitCount, setHitCount] = useState(0);
//   const [isGameEnded, setIsGameEnded] = useState(false);
//   const [playPunch] = useSound(punchSound);
//   const [playSlap] = useSound(slapSound);

//   const handlePunch = () => {
//     if (isGameEnded) return;

//     setHitCount(prev => prev + 1);
    
//     // Randomly choose between punch or slap sound
//     if (Math.random() > 0.5) {
//       playPunch();
//     } else {
//       playSlap();
//     }

//     // Ek certain hit count ke baad game end kar do
//     if (hitCount >= 9) { // 10 punches ke baad
//       setIsGameEnded(true);
//     }
//   };

//   return (
//     <div className="game-container">
//       {!isGameEnded ? (
//         <motion.div 
//           className="game-screen"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <div className="player-avatar">
//             <img src={gfAvatar} alt="Player" />
//           </div>
//           <div className="opponent-zone" onClick={handlePunch}>
//             <motion.img 
//               key={hitCount} // Key change karne se animation har baar trigger hoga
//               src={myAvatar} 
//               alt="Punching Bag" 
//               className="my-avatar"
//               initial={{ scale: 1 }}
//               animate={{ 
//                 scale: [1, 0.9, 1.1, 1], // Punch effect
//                 x: [0, Math.random() * 10 - 5, 0], // Thoda shake
//                 y: [0, Math.random() * 10 - 5, 0]
//               }}
//               transition={{ duration: 0.1 }}
//             />
//             <AnimatePresence>
//               {hitCount > 0 && (
//                 <motion.div
//                   initial={{ opacity: 1, y: 0 }}
//                   animate={{ opacity: 0, y: -50 }}
//                   exit={{ opacity: 0 }}
//                   transition={{ duration: 0.8 }}
//                   className="hit-text"
//                 >
//                   {hitCount % 2 === 0 ? "Ouch! 💥" : "Take That! 💪"}
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>
//           <div className="game-info">
//             <p>Anger Level: {hitCount}</p>
//             <p>Keep punching to release your anger!</p>
//           </div>
//         </motion.div>
//       ) : (
//         <motion.div 
//           className="game-end-screen"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//         >
//           <h2>Phew! Feeling better now, my love? ❤️</h2>
//           <img src={hugGif} alt="Hug Animation" className="hug-gif" />
//           <p>Come here, let me hug you tight in real life. I'm truly sorry.</p>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// export default PunchingGame;
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from "react-router-dom";


// Images ke paths check kar lena ki sahi hain ya nahi
// Agar images nahi hain, toh ye placeholder use karega
const myAvatar = "https://via.placeholder.com/150?text=My+Face"; 


function PunchingGame() {
  const navigate = useNavigate();
  const [hitCount, setHitCount] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [hits, setHits] = useState([]); // Multiple hit texts ke liye

  const handlePunch = (e) => {
    if (isGameEnded) return;

    setHitCount(prev => prev + 1);
    
    // Naya hit text add karo jahan click kiya hai
    const newHit = { id: Date.now(), x: e.clientX, y: e.clientY };
    setHits([...hits, newHit]);

    // 10 hits ke baad game khatam
    if (hitCount >= 9) {
      setTimeout(() => setIsGameEnded(true), 500);
    }

    // 1 second baad hit text remove kar do
    setTimeout(() => {
      setHits(prev => prev.filter(h => h.id !== newHit.id));
    }, 1000);
  };

  return (
    <div className="game-container">
      {!isGameEnded ? (
        <>
          <motion.h2 animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity }}>
            Gussa nikal lo mere upar! 😤🥊
          </motion.h2>
          <p>Tap on my face to punch/slap</p>
          
          <div className="opponent-zone" onClick={handlePunch}>
            <motion.img 
              key={hitCount}
              src={myAvatar} 
              alt="Punching Bag" 
              className="my-avatar"
              animate={{ 
                x: hitCount > 0 ? [0, -10, 10, -10, 0] : 0,
                rotate: hitCount > 0 ? [0, -5, 5, -5, 0] : 0
              }}
              transition={{ duration: 0.2 }}
            />
            
            {/* Flying Hit Texts */}
            <AnimatePresence>
              {hits.map(hit => (
                <motion.span
                  key={hit.id}
                  initial={{ opacity: 1, y: 0, scale: 0.5 }}
                  animate={{ opacity: 0, y: -100, scale: 1.5 }}
                  exit={{ opacity: 0 }}
                  className="hit-text"
                  style={{ left: '40%' }}
                >
                  {hitCount % 2 === 0 ? "Dishoom! 👊" : "Chatak! 👋"}
                </motion.span>
              ))}
            </AnimatePresence>
          </div>

          <div className="health-bar-bg" style={{ width: '200px', height: '10px', background: '#444', borderRadius: '5px', marginTop: '20px' }}>
            <motion.div 
              className="health-bar-fill" 
              style={{ height: '100%', background: '#ff4d4d', borderRadius: '5px' }}
              animate={{ width: `${100 - (hitCount * 10)}%` }}
            />
          </div>
        </>
      ) : (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="game-end-screen"
        >
          <h1 className="golden-text">Ab gussa thanda? ❤️</h1>
          <img src='/images/momo7.jpeg' alt="Hug" className="hug-gif" style={{ width: '250px', borderRadius: '15px' }} />
          <p style={{ marginTop: '20px', maxWidth: '300px' }}>
            Sorry for everything, my love. I'm always here for you to hit, 
            to love, and to hold. ❤️
          </p>
          <button className="open-btn" onClick={() => window.location.reload()}>
            Start Over
          </button>

            {/* 🔘 Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/bubble')}
            className="px-6 py-3 rounded-full
              bg-white/20 hover:bg-white/30
              transition"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/funny")}
            className="px-6 py-3 rounded-full
              bg-pink-500 hover:bg-pink-600
              shadow-lg transition"
          >
            Next 💖
          </button>
        </div>
        </motion.div>
        
      )}
    </div>
  );
}

export default PunchingGame;