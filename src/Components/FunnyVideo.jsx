import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const FunnyVideo = () => {
  const heartSoundRef = useRef(null);
    const navigate = useNavigate();

  useEffect(() => {
    // Play heartbeat sound once video ends
    const video = document.getElementById("funnyVideo");
    video.addEventListener("ended", () => {
      heartSoundRef.current.play();
    });
  }, []);

  return (
    <div className="funny-wrapper">
      {/* ⭐ Moving Stars */}
      <div className="stars"></div>

      <div className="video-card">
        <video
          id="funnyVideo"
          src="/videos/funny.mp4"
          controls
          autoPlay
          muted
          className="funny-video"
        />
  <p className="funny-text">
          I know mujhse bahut gussa hai.  
          Kabhi kabhi mujhe marne ka mann bhi bahut karta hoga 😅  
          <br /><br />

          Ye thodi si funny cheez hai jo maine banayi hai —  
          thodi si pagalpanti jo mere dimaag me chali.  
          <br /><br />

          Haan, mann me ye bhi aa raha hoga ki  
          “ye banda thoda pagal hai” 😌  
          Shayad thoda blush bhi ho raha ho…  
          ya fir gussa aa raha ho…  
          ya fir bas halki si hasi.  
          <br /><br />

          I don’t know.  
          <br /><br />

          Bas itna jaanta hoon ki haan Momo,  
          meri galtiyaan bahut zyada hain.  
          Aur un galtiyon par tumhe manane ka time  
          mujhe kabhi mila hi nahi.  
          <br /><br />

          Aur jab mila bhi,  
          toh maine uski value nahi ki — sach me.  
          <br /><br />

          Aaj jab tum door ho,  
          toh tumhe paas lane ke liye  
          jo mere mann me aa raha hai  
          bas wahi kar raha hoon.  
          <br /><br />

          Aur ek baat aur…  
          <br /><br />

          Main bas itna jaanta hoon ki  
          **deserve ho ya na ho**,  
          kisi ke saath rehne ke liye  
          sabse zaroori cheez ye hoti hai ki  
          <br />
          **“ye insaan mera saath kabhi nahi chhodega.”**  
          <br /><br />

          Chahe situation koi bhi ho,  
          chahe ladai ho ya kuch bhi,  
          ek dusre ka saath nahi chhodte.  
          <br /><br />

          Hamesha saath khade rehte hain.  
          Stand lete hain — ek dusre ke liye.  
          <br /><br />

          I know…  
          main ye baat pehle kabhi samajh nahi paaya.  
          <br /><br />

          Ab bas saari galatfahmiyan hataani hain.  
          <br /><br />

          Aur haan…  
          mujhe tumse shaadi karni hai, Momo.  
          Tumhara partner banna hai.  
          <br /><br />

          **You vs me nahi —  
          problem vs us.**  
          <br /><br />

          Deserve karna toh baad ki baat hai…  
          <br /><br />

          Yes, you deserve the best.  
          Isliye main hoon.  
          <br /><br />

          Aur main bhi best love deserve karta hoon,  
          isliye shayad God ne  
          tumhe meri life me bheja.  
          <br /><br />

          God’s choice.  
          Yaad rakhna.  
          <br /><br />

          Abhi bahut si cheezein karni hain,  
          bahut saari kahaniyaan likhni hain…  
          <br /><br />

          Aur main chahta hoon  
          ki wo sab **tumhare saath ho.** 💙
        </p>

        {/* 🤍 Hug Animation */}
        <div className="hug">
          🫂
        </div>
         {/* 🔘 Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate('/anger')}
            className="px-6 py-3 rounded-full
              bg-white/20 hover:bg-white/30
              transition"
          >
            ← Back
          </button>

          <button
            onClick={() => navigate("/infinite")}
            className="px-6 py-3 rounded-full
              bg-pink-500 hover:bg-pink-600
              shadow-lg transition"
          >
            Next 💖
          </button>
        </div>
      </div>

      {/* 🔊 Heartbeat sound */}
      <audio ref={heartSoundRef} src="/heartbeat.mp3" />
      
      <style>{`
        /* 🌌 Wrapper */
        .funny-wrapper {
          min-height: 100vh;
          background: radial-gradient(circle at top, #1a1a2e, #0b0b12);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          position: relative;
          overflow: hidden;
          color: #e5e5dc;
          font-family: 'Poppins', sans-serif;
        }

        /* ⭐ Stars */
        .stars {
          position: absolute;
          width: 200%;
          height: 200%;
          background: transparent url("https://raw.githubusercontent.com/VincentGarreau/particles.js/master/demo/media/star.png") repeat;
          animation: moveStars 60s linear infinite;
          opacity: 0.25;
        }

        @keyframes moveStars {
          from { transform: translateY(0); }
          to { transform: translateY(-1000px); }
        }

        /* 🎥 Card */
        .video-card {
          max-width: 720px;
          width: 100%;
          background: rgba(0,0,0,0.45);
          border-radius: 16px;
          padding: 20px;
          z-index: 2;
          box-shadow: 0 20px 60px rgba(0,0,0,0.7);
          backdrop-filter: blur(6px);
        }

        .funny-video {
          width: 100%;
          border-radius: 12px;
          margin-bottom: 20px;
        }

        .funny-text {
          font-size: 15px;
          line-height: 1.8;
        }

        /* ❤️ Heartbeat Text */
        .heartbeat-text {
          display: inline-block;
          margin-top: 20px;
          font-weight: 600;
          color: #ffb6c1;
          animation: heartbeat 2s infinite;
        }

        @keyframes heartbeat {
          0% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 0.6; }
        }

        /* 🫂 Hug */
        .hug {
          margin-top: 30px;
          font-size: 48px;
          text-align: center;
          animation: hugPulse 3s infinite;
        }

        @keyframes hugPulse {
          0%,100% { transform: scale(1); }
          50% { transform: scale(1.2); }
        }

        @media (max-width: 600px) {
          .funny-text { font-size: 14px; }
        }
      `}</style>
    </div>
  );
};

export default FunnyVideo;
