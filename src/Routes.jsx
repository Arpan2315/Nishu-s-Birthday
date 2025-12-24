import { BrowserRouter, Routes, Route } from "react-router-dom";

import BirthdayStart from"./Components/BirthdayStart"
import MemoryLane from"./Components/MemoryLane"
import OpenWhen from"./Components/OpenWhen"
import MemoryTimeline from"./Components/MemoryTimeline"
import BubbleWrap from"./Components/BubbleWrap"
import RomanticScene from "./Components/RomanticScene";
import AngerRelease from "./Components/PunchingGame";
import StressReliefGame from "./Components/StressReliefGame";
import PunchingGame from "./Components/PunchingGame";
import FunnyVideo from "./Components/FunnyVideo";

import InfiniteMenuFinal from "./Components/world/InfiniteMenuFinal";
import ThankYouPage from "./Components/ThankYouPage.jsx.jsx";

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


        <Route path="/bubble" element={<BubbleWrap />} />

        <Route path="/anger" element={<PunchingGame />} />

        <Route path='/funny' element={<FunnyVideo />}> </Route>

        <Route path="/infinite" element={<InfiniteMenuFinal />} />
        <Route path="/thankyou" element={<ThankYouPage/>} />


        {/* <Route path="/timeline" element={<MemoryTimeline />} /> */}


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
