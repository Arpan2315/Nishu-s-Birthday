import React from 'react';
import InfiniteMenu from './InfiniteMenu';
import '../../App.css';
import { useNavigate } from 'react-router-dom';

const InfiniteMenuFinal = () => {
    // YAHAN DEFINED HONA CHAHIYE
    const navigate = useNavigate(); 

    const items = [
      { image: '/images/nishu1.jpg', title: '', description: 'OGGY and Olivia' },
      { image: '/images/nishu2.jpg', title: '', description: 'Tom and Jerry' },
      { image: '/images/nishu3.jpg', title: '', description: '' },
      { image: '/images/nishu4.jpg', title: '', description: '' }
    ];

    return (
      <div className="bg-black min-h-screen flex flex-col">
        {/* Infinite Menu Section */}
        <div style={{ height: '80vh', position: 'relative' }}>
          <InfiniteMenu items={items}/>
        </div>

        {/* Buttons Section - Isko ensure karo ki ye div visible hai */}
        <div className="flex flex-1 justify-center items-center bg-black gap-6 pb-10">
          <button
            type="button"
            onClick={() => navigate('/funny')} 
            className="px-8 py-3 rounded-full text-white bg-white/10 border border-white/20 hover:bg-white/30 transition-all cursor-pointer z-50"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={() => navigate("/thankyou")} 
            className="px-8 py-3 rounded-full text-white bg-pink-500 hover:bg-pink-600 shadow-[0_0_15px_rgba(236,72,153,0.5)] transition-all cursor-pointer z-50"
          >
            Next 💖
          </button>
        </div>
      </div>
    );
}

export default InfiniteMenuFinal;