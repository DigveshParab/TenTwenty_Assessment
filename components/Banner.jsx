"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
    {src:"/fields_d.png",title:"Welcome To TenTwenty Farms",subtitle:"From Our Farms To Your Hands"},
    {src:"/fields_e.jpg",title:"Welcome To TenTwenty Farms",subtitle:"Fresh Produce, Delivered Daily"},
    {src:"/fields_f.jpg",title:"Welcome To TenTwenty Farms",subtitle:"Organic and Locally Sourced"},
    {src:"/fields_g.jpg",title:"Welcome To TenTwenty Farms",subtitle:"Organic and Locally Sourced"},

]

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressKey, setProgressKey] = useState(0); // Key to reset animation
  
    useEffect(() => {
      const interval = setInterval(() => {
        changeImage();
      }, 10000); // Change every 10 seconds
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  

    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setProgressKey((prevKey) => prevKey + 1); // animation reset on change of this key
    };
  
    return (
      <div className="relative w-screen h-190 md:h-300">
        {/* Background Image */}
        <div className="absolute inset-0 ">
          <Image
            src={images[currentIndex].src}
            alt="Background"
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            priority
            className="mt-10 md:-mt-0 contrast-120 "
          />
        </div>
  
        {/* Text Section */}
        <div className="w-[300px] h-200 z-10 absolute top-62 left-8 md:w-[80%] md:top-117 md:left-44">
          <div className="text-white">
            <p className="md:text-xl tracking-[0.7px]">{images[currentIndex].title}</p>
            <h1 className="text-[39px] tracking-[2.5px] leading-[40px] mt-4 md:text-[79px] md:w-[700px] md:mt-9 md:tracking-[3.5px] md:leading-[85px]">
                {images[currentIndex].subtitle}
            </h1>
          </div>
  
          {/* Next Image Preview */}
          <div className="w-[300px] h-[100px] text-white mt-42 flex flex-row justify-between md:w-[450px] md:h-[160px] md:mt-58">
            <div
                key={progressKey} // Reset animation when changed
                className="relative w-[40%] h-full border border-white border-opacity-30 flex justify-center items-center p-2"
                onClick={changeImage}
            >
              <div className="w-[80%] h-[85%] relative flex items-center justify-center cursor-pointer hover:">
                <Image
                  src={images[(currentIndex + 1) % images.length].src} 
                  alt="Next Image Preview"
                  quality={100}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top left"
                  priority
                />
                <div className="absolute"><p className="text-white">NEXT</p></div>
              </div>
            </div>
  
            {/* Progress Indicator */}
            <div className="w-[50%] h-full relative flex justify-start items-center mx-1 mt-2 md:-mx-1">
              <p className="text-sm mr-1 md:text-xl">{currentIndex + 1}</p>
              <div className="min-w-[100px] border-1 border-white ml-2 mr-2 md:min-w-[138px] md:ml-6 md:mr-6"></div>
              <p className="text-sm ml-1 md:text-xl md:-ml-1">{images.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  