"use client"
import React, { useState, useEffect } from 'react';
import {AnimatePresence, motion} from "framer-motion"

const Banner = ({bannerImages}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [progressKey, setProgressKey] = useState(0); // Key to reset animation
    const [textAnimate,setTextAnimate] = useState(0)
    // image animation
    const [imageAnimate, setImageAnimate] = useState(false);
    const [isFirstLoad, setIsFirstLoad] = useState(true);



    useEffect(() => {
      const interval = setInterval(() => {
        changeImage();
      }, 9800); // Change every 11 seconds
  
      return () => clearInterval(interval);
    }, [currentIndex]);
  

    useEffect(() => {
      // Set to false after first animation completes
      setTimeout(() => setIsFirstLoad(false), 1200); // Adjust time based on splash screen duration
    }, []);
    
    const changeImage = () => {

        setImageAnimate(true)
        setTextAnimate(prev=>prev + 1)
        setProgressKey((prevKey) => prevKey + 1);

        setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImages.length);
            setImageAnimate(false)
        }, 1200); // Adjusted timing
    };
    // todo: work on proper syncing of the animations and timing

    return (
      <div className="relative w-screen h-190 md:h-280" data-testid="banner-component">
        {/* Background Image */}
        <div className="absolute inset-0 flex items-center justify-center ">
          <AnimatePresence mode='wait'>
            <motion.img
              key={`top-${currentIndex}`}
              initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)", y: 0 }}
              animate={imageAnimate &&  {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", y: 0} }
              transition={{ duration: 1, ease: "easeInOut" }}
              className='absolute w-screen h-full transition-all duration-1000 object-cover  md:scale-102'
              src={bannerImages[currentIndex].src}
              alt='background top'
            />
            <motion.img
              key={`bottom-${currentIndex}`}
              initial={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)", y: 0 }}
              animate={imageAnimate && {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}      
              className='absolute w-screen h-full transition-all duration-1000 object-cover md:scale-102'
              src={bannerImages[currentIndex].src}
              alt='background top'
            />
            <motion.img
              data-testid="background-image"
              key={`next-${currentIndex}`}
              initial={{ opacity: 1, scale: 0.99 }}
              animate={imageAnimate && { opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 w-full h-full object-cover bg-center md:scale-102 -z-10"
              src={bannerImages[(currentIndex + 1) % bannerImages.length].src}
              alt='background top'
            />
          </AnimatePresence>
        </div>
  
        {/* Text Section */}
        <div className="w-[300px] h-200 z-10 absolute top-62 left-8 md:w-[80%] md:top-110 md:left-44">
          <div className="text-white">
            <motion.h1
              data-testid="banner-title"
              key={`title-${textAnimate}`} 
              initial={{ scale:1,opacity: 0, y: 10 }}
              animate={{ scale:1,opacity: 1, y: 10 }}
              transition={isFirstLoad ? { duration: 2, ease: "easeOut",delay: 4 }:{ duration: 2, ease: "easeInOut"}}
              className="md:text-xl tracking-[0.7px] mb-2"
            >
              {bannerImages[currentIndex].title}
            </motion.h1>
            
            <motion.h1
              data-testid="banner-subtitle"
              key={`subtitle-${textAnimate}`} 
              initial={isFirstLoad ? { scale: 1.3, y: "-50%"}:{ scale:1,opacity: 0, y: 10 }}
              animate={isFirstLoad ? { scale: 1, y: "0%" }:{ scale:1,opacity: 1, y: 10 }}
              transition={isFirstLoad ? { duration: 2, ease: "easeOut",delay: 4 }:{ duration: 2, ease: "easeInOut"}}
              className="text-[39px] tracking-[2.5px] leading-[40px] mt-4 md:text-[79px] md:w-[700px] md:mt-9 md:tracking-[3.5px] md:leading-[85px]"
            >
              {bannerImages[currentIndex].subtitle}
            </motion.h1>
          </div>
  
          {/* Next Image Preview */}
          <div className="w-[260px] h-[100px] text-white mt-42 flex flex-row justify-between md:w-[400px] md:h-[160px] md:mt-48">
          <div className="relative w-[40%] h-full flex justify-center items-center">  
                  {/* Top Border */}
                  <motion.div
                    key={`top-${progressKey}`}
                    className="absolute top-0 left-0 h-0 w-full border-t-6 md:border-t-8 border-white"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut" }}
                  />

                  {/* Right Border */}
                  <motion.div
                    key={`right-${progressKey}`}
                    className="absolute top-0 right-0 w-0 h-full border-r-6 md:border-r-8 border-white"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 2.5 }}
                  />

                  {/* Bottom Border */}
                  <motion.div
                    key={`bottom-${progressKey}`}
                    className="absolute bottom-0 right-0 h-0 w-full border-b-6 md:border-b-8 border-white rotate-180"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 5 }}
                  />

                  {/* Left Border */}
                  <motion.div
                    key={`left-${progressKey}`}
                    className="absolute bottom-0 left-0 w-0 h-full border-l-6 md:border-l-8 border-white rotate-180"
                    initial={{ height: 0 }}
                    animate={{ height: "100%" }}
                    transition={{ duration: 2.5, ease: "easeInOut", delay: 7.5 }}
                  />


              {/* Image Container (No Border Here) */}
              <div
                data-testid="next-image-btn-component"
                key={progressKey}
                className="relative w-[60%] h-[60%] flex items-center justify-center cursor-pointer"
                onClick={changeImage}
              >
                
                <motion.img
                  key={`top-${currentIndex}`}
                  initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 50%, 0% 50%)", y: 0 }}
                  animate={imageAnimate &&  {clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)", y: 0} }
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className='absolute w-screen h-full transition-all duration-1000 object-cover scale-105'
                  src={bannerImages[(currentIndex + 1) % bannerImages.length].src}
                  alt='background top'
                />
                <motion.img
                  key={`bottom-${currentIndex}`}
                  initial={{ clipPath: "polygon(0% 50%, 100% 50%, 100% 100%, 0% 100%)", y: 0 }}
                  animate={imageAnimate && {clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)", y: 0 }}
                  transition={{ duration: 1, ease: "easeInOut" }}      
                  className='absolute w-screen h-full transition-all duration-1000 object-cover scale-105'
                  src={bannerImages[(currentIndex + 1) % bannerImages.length].src}
                  alt='background top'
                />
                <motion.img
                  data-testid="next-btn-image"
                  key={`next-${currentIndex}`}
                  initial={{ opacity: 1, scale: 0.98 }}
                  animate={imageAnimate && { opacity: 1, scale: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover bg-center scale-105 -z-10"
                  src={bannerImages[(currentIndex + 2) % bannerImages.length].src}
                  alt='background top'
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
  