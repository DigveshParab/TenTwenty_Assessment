"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { bannerImages } from '../data/bannerData';

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressKey, setProgressKey] = useState(0); // Key to reset animation
    // for loading border
    const [borderStage, setBorderStage] = useState(0);

    // image animation
    const [imageAnimate, setImageAnimate] = useState(false);

    useEffect(() => {
      // reset border glow when image changes
      setBorderStage(0);

      const interval = setInterval(() => {
        changeImage();
      }, 11000); // Change every 11 seconds
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  

    // border update
    useEffect(() => {
        const borderUpdate = setInterval(() => {
            setBorderStage((prev) => (prev < 4 ? prev + 1 : prev));
        }, 2500); // Update every 2.5 seconds

        return () => clearInterval(borderUpdate);
    }, [currentIndex]); 

  
    const borderClasses = [
      "",
      "border-t-[6px] md:border-t-[10px] border-white rounded-t-md",  // Top
      "border-t-[6px] border-r-[6px] md:border-t-[10px] md:border-r-[10px] border-white rounded-tr-md",// Top + Right 
      "border-t-[6px] border-r-[6px] border-b-[6px] md:border-t-[10px] md:border-r-[10px] md:border-b-[10px] border-white rounded-tr-md rounded-br-md",  // Top + Right + Bottom 
      "border-[6px] md:border-[10px] border-white rounded-md", // Top + Right + Bottom + left
  ];
  

    const changeImage = () => {
      // animate when image i=changes
      setImageAnimate(true); // Start animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
        setProgressKey((prevKey) => prevKey + 1); // animation reset on change of this key
        setBorderStage(0)
        setImageAnimate(false); // Reset after animation
      }, 500); // Match CSS duration
    };
  
    return (
      <div className="relative w-screen h-190 md:h-300">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <Image
            src={bannerImages[currentIndex].src}
            alt="Background Top"
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="top left"
            priority
            className={`absolute w-full h-1/2 transition-all duration-1000 ${
              imageAnimate ? 'translate-x-[5%] ' : 'translate-x-0 '
            }`}
          />

          {/* image under */}
          <Image
            src={bannerImages[currentIndex].src}
            alt="Background Bottom"
            quality={100}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom left"
            priority
            className={`absolute w-full h-1/2 bottom-0 transition-all duration-1000 ${
              imageAnimate ? 'translate-x-[-5%] ' : 'translate-x-0 '
            }`}
          />

        </div>
  
        {/* Text Section */}
        <div className="w-[300px] h-200 z-10 absolute top-62 left-8 md:w-[80%] md:top-117 md:left-44">
          <div className="text-white">
            <p className={`md:text-xl tracking-[0.7px] transition-opacity duration-700 ease-in-out ${imageAnimate ? "opacity-0" : "opacity-100"}`}>
              {bannerImages[currentIndex].title}
            </p>
            <h1 className={`text-[39px] tracking-[2.5px] leading-[40px] mt-4 md:text-[79px] md:w-[700px] md:mt-9 md:tracking-[3.5px] md:leading-[85px] transition-opacity duration-700 ease-in-out ${imageAnimate ? "opacity-0" : "opacity-100"}`}>
              {bannerImages[currentIndex].subtitle}
            </h1>
          </div>
  
          {/* Next Image Preview */}
          <div className="w-[300px] h-[100px] text-white mt-42 flex flex-row justify-between md:w-[450px] md:h-[160px] md:mt-58">
          <div className="relative w-[40%] h-full flex justify-center items-center">  
              {/* Absolute Border Effect */}
              <div className={`absolute w-[105%] h-[110%] border-1 border-white ${borderClasses[borderStage]} transition-all duration-700 ease-in pointer-events-none`} />
              
              {/* Image Container (No Border Here) */}
              <div
                key={progressKey}
                className="relative w-[80%] h-[85%] flex items-center justify-center cursor-pointer"
                onClick={changeImage}
              >
                <Image
                  src={bannerImages[(currentIndex + 1) % bannerImages.length].src} 
                  alt="Next Image Preview"
                  quality={90}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top left"
                  priority
                  className="min-w-[100%] min-h-[100%]"
                />
                <div className="absolute">
                  <p className="text-white">NEXT</p>
                </div>
              </div>
            </div>

  
            {/* Progress Indicator */}
            <div className="w-[50%] h-full relative flex justify-start items-center mx-1 mt-2 md:-mx-1">
              <p className="text-sm mr-1 md:text-xl">{currentIndex + 1}</p>
              <div className="min-w-[100px] border-1 border-white ml-2 mr-2 md:min-w-[138px] md:ml-6 md:mr-6"></div>
              <p className="text-sm ml-1 md:text-xl md:-ml-1">{bannerImages.length}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Banner;
  
  
