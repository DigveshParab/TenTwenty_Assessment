"use client"
import React from 'react'
import { motion} from "framer-motion";


const About = () => {
  return (
    <div className='w-full h-auto flex flex-col justify-center' data-testid="about-component">
        <div className='w-full h-[320px] mt-20 flex flex-col justify-center items-center md:mt-26'>
            {/* title */}
            <div className='w-full flex justify-center items-center text-center'>
                <motion.h2
                    data-testid ="about-header"
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.4,ease:"easeInOut",delay:0.4}}
                    className='text-[27px] text-black mb-4 md:text-7xl md:mb-10 md:mt-30'
                >
                    Quality Products
                </motion.h2>
                {/* <h2 className={`text-[27px] text-black mb-4 md:text-7xl md:mb-10 md:mt-30 transition-all duration-1000 ease-in-out   ${visibleHeader ? "opacity-100" : "opacity-0"}`}>Quality Products</h2> */}
            </div>
            {/* description */}
            <div className='w-full flex justify-center text-center'>
                <motion.p
                    data-testid ="about-desc"
                    initial={{opacity:0,y:20}}
                    whileInView={{opacity:1,y:0}}
                    transition={{duration:0.4,ease:"easeInOut",delay:0.8}}
                    className='w-[77%] md:w-[55%] leading-[20px] md:text-[32px]  md:mt-8 md:leading-[40px] text-gray-500'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br className='hidden md:block'/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat.
                </motion.p>
                {/* <p className={`w-[77%] md:w-[55%] leading-[20px] md:text-[32px]  md:mt-8 md:leading-[40px] text-gray-500 transition-all duration-1000 ease-in-out   ${visibleDesc ? "opacity-100" : "opacity-0"}`}>  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br className='hidden md:block'/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat.
                </p> */}
            </div>
        </div>
    </div>
  )
}

export default About