"use client"
import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion"
const SplashScreen = () => {
    const [isAnimating,setIsAnimating] = useState(true)

    useEffect(()=>{
        const timeout = setTimeout(() => {
            setIsAnimating(false)
        }, 2000);

        return ()=>clearInterval(timeout);
    },[])

  return (
    <div className='fixed inset-0 flex items-center justify-center z-100' style={{backgroundColor:"#D2B48C"}}>
        <motion.h1
            initial={{opacity:0,marginTop:-20}}
            animate={{opacity:100,marginTop:0}}
            transition={{duration:.5,ease:"easeIn"}}
            className='text-white text-4xl font-bold md:text-7xl'
        >
            TenTwenty
        </motion.h1>

        {/* growing line */}
        {/* Large Screens (md and above) */}
        <svg className="w-full h-full absolute top-1/2 left-0 hidden md:block">
            <motion.path
            d="M 0 200 Q 400 0, 700 100 T 800 100 T 2000 100" // Adjusted for large screens
            fill="transparent"
            stroke="white"
            strokeWidth="1"
            initial={{ strokeWidth: 1 }}
            animate={{ strokeWidth: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="w-full"
            />
        </svg>

        <svg className="w-full h-full absolute top-1/2 left-0 hidden md:block">
            <motion.path
            d="M -5 200 Q 400 0, 700 100 T 800 100 T 2000 100" // Adjusted for large screens
            fill="transparent"
            stroke="white"
            strokeWidth="10"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            className="w-full"
            />
        </svg>


        {/* mobile screen */}
        <svg className="w-full h-full absolute top-1/2 left-0 md:hidden">
        <motion.path
          d="M -26 62 Q 25 24 80 44 T 112 37 T 434 63"
          fill="transparent"
          stroke="white"
          strokeWidth="1"
          initial={{ strokeWidth: 1 }}
          animate={{ strokeWidth: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full"
        />
      </svg>

      <svg className="w-full h-full absolute top-1/2 left-0 md:hidden">
        <motion.path
          d="M -26 62 Q 25 24 80 44 T 112 37 T 434 63"
          fill="transparent"
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 1 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-full"
        />
      </svg>

    </div>
  )
}

export default SplashScreen