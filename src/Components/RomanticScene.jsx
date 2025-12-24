export default function RomanticScene() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#050814] via-[#0b1d3a] to-black">

      {/* 🌌 Nebula Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,80,255,0.18),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,120,180,0.12),transparent_45%)]" />

      {/* 🌙 Moon */}
      <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-[#fff8dc]
        shadow-[0_0_60px_25px_rgba(255,248,220,0.35)]" />

      {/* 🌲 Tree (left bottom) */}
      <img
        src="https://i.imgur.com/7v0JzO5.png"
        alt="Tree silhouette"
        className="absolute bottom-0 left-0 w-[240px] opacity-90"
        draggable="false"
      />

      {/* 🏔 Snow Mountains */}
      <img
        src="https://i.imgur.com/kz2FQJ0.png"
        alt="Snow mountains"
        className="absolute bottom-0 w-full opacity-70"
        draggable="false"
      />

      {/* 🐦 Shadow Birds */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="bird"
            style={{
              top: `${18 + i * 7}%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      {/* 💑 Couple Sitting */}
      <img
        src="https://i.imgur.com/8mQJQzR.png"
        alt="Couple silhouette"
        className="absolute bottom-24 right-10 w-[190px] sm:w-[230px]
          opacity-85 drop-shadow-[0_0_20px_rgba(255,255,255,0.15)]"
        draggable="false"
      />

      {/* 🌑 Ground Shadow */}
      <div className="absolute bottom-20 right-14 w-44 h-4
        bg-black/40 blur-md rounded-full" />

      {/* 💌 Text */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-6">
        <h1 className="text-white text-[clamp(2rem,6vw,3.5rem)] font-semibold leading-tight">
          With you, even silence feels like love 🤍
        </h1>
      </div>

    </div>
  );
}
