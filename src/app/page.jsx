"use client"
// Framer Motion (which runs in the browser)
import React from 'react'
import Navbar from "../../components/Navbar";
import Banner from '../../components/banner/Banner';
import SplashScreen from '../../components/SplashScreen';
import {motion} from "framer-motion"
import ImageSlider from '../../components/ImageSlider';
import { galleryImages } from '../../data/galleryData';
import {bannerImages} from "../../data/bannerData"
import About from '../../components/about/About';

const Home = () => {

    return (
      <>
      <motion.div
        initial={{display:"block"}}
        animate={{display:"none"}}
        transition={{duration:6,ease:"easeInOut"}}
      >
        <SplashScreen/>
      </motion.div >
      <motion.div
        initial={{clipPath:"inset(50% 50% 50% 50%)"}}
        animate={{clipPath:"inset(0% 0% 0% 0%)",display:"none"}}
        transition={{duration:3,ease:"easeOut",delay:3}}
        className='absolute inset-0 flex items-center justify-cente z-100'
      >
        <div className="flex-col align-middle w-screen h-screen">
          <Navbar/>
          <Banner bannerImages={bannerImages}/>
          <About galleryImages={galleryImages}/>
        </div>
      </motion.div>
      <div className="flex-col align-middle w-screen h-screen">
          <Navbar/>
          <Banner bannerImages={bannerImages}/>
          <About/>
          <ImageSlider galleryImages={galleryImages}/>
        </div>
      </>

    );
  }

export default Home;


// todo:
// 1. disbale scrolling till animation is completed
// or
// 1. put the motion div of animation for banner only and keep rest of them outside and load when animation is over on state change