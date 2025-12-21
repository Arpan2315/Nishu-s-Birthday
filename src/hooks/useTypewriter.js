// import { useEffect, useState } from "react";

// export default function useTypewriter(text, speed = 40) {
//   const [displayText, setDisplayText] = useState("");

//   useEffect(() => {
//     let i = 0;
//     setDisplayText("");

//     const interval = setInterval(() => {
//       setDisplayText((prev) => prev + text.charAt(i));
//       i++;
//       if (i >= text.length) clearInterval(interval);
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed]);

//   return displayText;
// }
import { useEffect, useRef, useState } from "react";
import typeSound from "../assets/sound/typewriter.mp3";

export default function useTypewriter(text, speed = 40) {
  const [displayedText, setDisplayedText] = useState("");
  const indexRef = useRef(0);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    // reset
    setDisplayedText("");
    indexRef.current = 0;

    // setup sound
    audioRef.current = new Audio(typeSound);
    audioRef.current.volume = 0.4;

    intervalRef.current = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayedText((prev) => prev + text[indexRef.current]);

        // 🔊 typing sound
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {});

        indexRef.current++;
      } else {
        // ✅ TEXT COMPLETE → SOUND STOP
        clearInterval(intervalRef.current);
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }, speed);

    // cleanup when envelope closes / text changes
    return () => {
      clearInterval(intervalRef.current);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    };
  }, [text, speed]);

  return displayedText;
}
