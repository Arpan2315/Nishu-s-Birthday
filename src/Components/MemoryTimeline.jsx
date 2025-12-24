import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function MemoryTimeline() {
    const timelineData = [
  {
    date: "12 Feb 2022",
    title: "The Day We Met 💫",
    text: "Everything changed that day...",
    img: "https://i.imgur.com/7QZJZ3U.png",
  },
  {
    date: "20 Mar 2022",
    title: "First Long Talk ☎️",
    text: "We talked for hours and forgot time.",
    img: "https://i.imgur.com/1X6Rj8F.png",
  },
  {
    date: "5 Aug 2022",
    title: "First Fight 😅",
    text: "Even fights brought us closer.",
    img: "https://i.imgur.com/4M7IWwP.png",
  },
  {
    date: "Forever ♾️",
    title: "Still Walking Together ❤️",
    text: "And I want this journey forever.",
    img: "https://i.imgur.com/yY6Yz7K.png",
  },
];

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // 🚲 character movement
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "90%"]);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-[#050814] via-[#0b1d3a] to-black
      px-4 py-24 text-white relative"
    >
      <h1 className="text-center text-[clamp(2rem,6vw,3rem)] font-semibold mb-24">
        Our Journey Together 💕
      </h1>

      <div className="relative max-w-5xl mx-auto">

        {/* 🟣 Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2
          w-[4px] h-full bg-gradient-to-b from-pink-400 to-purple-500 rounded-full" />

        {/* 🚲 Moving Character */}
        <motion.div
          style={{ y }}
          className="absolute left-1/2 -translate-x-1/2 -top-6 z-20"
        >
          <div className="w-14 h-14 bg-pink-400 rounded-full
            flex items-center justify-center shadow-xl text-2xl">
            🚲
          </div>
        </motion.div>

        {/* 🧠 Timeline Items */}
        <div className="flex flex-col gap-32">
          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row items-center gap-8
                ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Card */}
              <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-xl
                border border-white/20 rounded-3xl p-6 shadow-xl">
                <p className="text-pink-300 text-sm mb-1">{item.date}</p>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-white/90 text-sm mb-4">{item.text}</p>
                <img
                  src={item.img}
                  alt=""
                  className="rounded-2xl shadow-lg"
                  draggable="false"
                />
              </div>

              {/* Spacer */}
              <div className="hidden md:block w-1/2" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
