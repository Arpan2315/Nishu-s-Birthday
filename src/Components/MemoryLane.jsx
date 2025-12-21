import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
const memories = [
  {
    title: "The Day We Met 💫",
    text: "I still remember that moment… when everything felt different. You came into my life like magic ✨",
    img: "/images/momo3.jpg",
  },
  {
    title: "Our First Laugh 😄",
    text: "Your smile became my favorite thing in the world. Every laugh with you feels like home 💖",
    img: "/images/momo5.jpg",
  },
  {
    title: "Little Moments 💕",
    text: "Not big things… just us talking, caring, understanding. These moments mean everything to me 🌸",
    img: "images/img4.jpg",
  },
  {
    title: "Forever With You 🤍",
    text: "No matter what comes, I want every tomorrow to have you in it. Always and forever ♾️",
    img: "images/img6.jpg",
  },
];

export default function MemoryLane() {
  const navigate = useNavigate();
  useEffect(() => {
  const handleMove = (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    document.documentElement.style.setProperty("--x", `${x}px`);
    document.documentElement.style.setProperty("--y", `${y}px`);
  };

  window.addEventListener("mousemove", handleMove);
  return () => window.removeEventListener("mousemove", handleMove);
}, []);


  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-[#0b0d2a] via-[#141852] to-black px-4 py-16 relative overflow-hidden">

      {/* ✨ Background Stars */}
      <div className="absolute inset-0 pointer-events-none"
      style={{ transform: "translate(calc(var(--x) * 0.3), calc(var(--y) * 0.3))" }}
>
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            className="absolute bg-white rounded-full opacity-70 animate-twinkle"
            style={{
              width: Math.random() * 2 + 3 + "px",
              height: Math.random() * 2 + 3 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

  
        {[...Array(6)].map((_, i) => (
  <span
    key={`shoot-${i}`}
    className="absolute shooting-star"
    style={{
      top: Math.random() * 60 + "%",
      left: Math.random() * 80 + "%",
      animationDelay: `${Math.random() * 6}s`,
    }}
  />
))}
      </div>
      {/* ☁️ Slow Moving Clouds */}
<div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]"
style={{ transform: "translate(calc(var(--x) * 0.5), calc(var(--y) * 0.5))" }}

>
  <div className="cloud cloud-1" />
  <div className="cloud cloud-2" />
</div>


      {/* 🌙 Moon */}
      <div className="absolute top-10 right-8 sm:right-20 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#fff8dc] shadow-[0_0_45px_#fff8dc]" 
      style={{ transform: "translate(calc(var(--x) * 0.8), calc(var(--y) * 0.8))" }}
      />

      {/* 💌 Heading */}
      <h1 className="relative z-10 text-center text-white font-semibold mb-16
        text-[clamp(2rem,6vw,3rem)]">
        Our Beautiful Memories 💞
      </h1>

      {/* 🕰️ Timeline */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-16">
        {memories.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative w-[220px] sm:w-[280px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full object-cover"
                  draggable="false"
                />
                <div className="absolute inset-0 bg-pink-300/20 blur-2xl" />
              </div>
            </div>

            {/* Text */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-pink-300 font-semibold mb-3
                text-[clamp(1.3rem,4vw,2rem)]">
                {item.title}
              </h2>
              <p className="text-white/90 leading-relaxed text-sm sm:text-base">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 💖 Navigation */}
      <div className="relative z-10 mt-20 flex justify-center gap-4">
        <button
          onClick={() => navigate("/start")}
          className="px-6 py-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition"
        >
          ← Back
        </button>

        <button
          onClick={() => navigate("/openwhen")}
          className="px-6 py-3 rounded-full bg-pink-500 hover:bg-pink-600 text-white transition shadow-lg"
        >
          Continue 💕
        </button>
      </div>
    </div>
  );
}
