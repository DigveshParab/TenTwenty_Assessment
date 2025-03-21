"use client"
import React, { useEffect, useState } from 'react'

const FlashScreen = ({ onFinish }) => {
    const [fadeIn, setFadeIn] = useState(false);
    const [slideUp, setSlideUp] = useState(false);
    const [expandLine, setExpandLine] = useState(false);

  useEffect(() => {
    setFadeIn(true); 
    setExpandLine(true); 
    setTimeout(() => setSlideUp(true), 3000); 
    setTimeout(onFinish, 4000); 
  }, [onFinish]);

  return (
    <div className={`fixed inset-0 bg-black flex flex-col justify-center items-center transition-all duration-1000 ${
        slideUp ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <h1 className={`text-white text-4xl md:text-6xl font-bold transition-opacity duration-2000 ${fadeIn ? "opacity-100 -mt-10" : "opacity-0 mt-0"}`}
      >TenTwenty</h1>

      <div className="relative w-full h-1 bg-transparent mt-4 overflow-hidden">
        <div className={`absolute left-0 h-full bg-white transition-all duration-2000 ${expandLine ? "w-full" : "w-0"}`}></div>
      </div>
    </div>
  );
};


export default FlashScreen