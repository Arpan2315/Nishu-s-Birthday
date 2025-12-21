import { BrowserRouter, Routes, Route } from "react-router-dom";

import BirthdayStart from"./Components/BirthdayStart"
import MemoryLane from"./Components/MemoryLane"
import OpenWhen from"./Components/OpenWhen"

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 1. Birthday Landing Page */}
        <Route path="/" element={<BirthdayStart />} />
        <Route path="/start" element={<BirthdayStart />} />

        {/* 2. Memory Lane Page */} 
        <Route path="/memory" element={<MemoryLane />} />

        {/* 3. Open When Page */}
        <Route path="/openwhen" element={<OpenWhen />} />

        {/* 2. Love / Cards Page
        <Route path="/love" element={<ForYouCard />} />

        {/* 3. Song Page */}
        {/* <Route path="/song" element={<SongPlayer />} /> */}

        {/* 4. Final Thank You Page */}
        {/* <Route path="/thankyou" element={<ThankYou />} /> */}

      </Routes>
    </BrowserRouter>
  );
}
