"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Gallery = () => {
    const [visibleHeader, setVisibleHeader] = useState(false);
    const [visibleDesc, setVisibleDesc] = useState(false);

    useEffect(() => {
        const onScroll = () => {
          if (window.scrollY >= 200){
            // adding delays to header and desc
            setTimeout(() => setVisibleHeader(true), 700); 
            setTimeout(() => setVisibleDesc(true), 800); 
          }
            
        };
    
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
      }, []);

      
  return (
    <div className='w-full h-auto flex flex-col justify-center'>
        <div className='w-full h-[320px] mt-20 flex flex-col justify-center items-center md:mt-26'>
            {/* title */}
            <div className='w-full flex justify-center items-center text-center'>
                <h2 className={`text-[27px] text-black mb-4 md:text-7xl md:mb-10 md:mt-30 transition-all duration-1000 ease-in-out   ${visibleHeader ? "opacity-100" : "opacity-0"}`}>Quality Products</h2>
            </div>
            {/* description */}
            <div className='w-full flex justify-center text-center'>
                <p className={`w-[77%] md:w-[55%] leading-[20px] md:text-[32px]  md:mt-8 md:leading-[40px] text-gray-500 transition-all duration-1000 ease-in-out   ${visibleDesc ? "opacity-100" : "opacity-0"}`}>  
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br className='hidden md:block'/>
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi 
                    ut aliquip ex ea commodo consequat.
                </p>
            </div>
        </div>


        {/* image slider : todo */}

        <div className='relative w-full flex justify-center items-center overflow-hidden'>
            <div className='relative w-[100%] min-h-[550px] md:min-h-[960px] mt-0 flex justify-center md:mt-65'>

                {/* left image */}
                <div className='relative min-w-[200px] h-[300px] md:min-w-[500px] md:h-[750px] left-5  transition-all rotate-[-10deg] duration-700 ease-in-out transform'
                    style={{
                        transform: "translateY(30px) scale(1.1)",
                      }}          
                >
                    <Image
                        src={"/gallary1.png"}
                        alt="Previous"
                        layout="fill"
                        objectFit="cover"
                        loading='lazy'
                    />
                </div>

                {/* center image */}
                <div
                    className="relative min-w-[200px] h-[300px] ml-22 mr-22 translate-y-1 md:-translate-y-10 md:min-w-[500px] md:h-[750px] transition-all  duration-700 ease-in-out transform md:ml-80 md:mr-80"
                    style={{
                        transform: "scale(1.1)",
                    }}
                >
                    <Image
                        src={"/gallary2.png"}
                        alt="Current"
                        layout="fill"
                        objectFit="cover"
                        loading='lazy'

                    />
                </div>

                {/* Right Image (Next) */}
                <div
                    className="relative min-w-[200px] h-[300px] md:min-w-[500px] md:h-[750px] right-5  transition-all rotate-[10deg] duration-700 ease-in-out transform"
                    style={{
                        transform: "translateY(30px) scale(1.1)",
                    }}
                >
                    <Image
                        src={"/gallary3.png"}
                        alt="Next"
                        layout="fill"
                        objectFit="cover"
                        loading='lazy'

                    />
                </div>



            </div>
        </div>

        <div className="w-full h-[500px] flex flex-col -mt-98 justify-center items-center text-center md:-mt-85">
            {/* Header */}
            <h2 className=" text-2xl  text-black tracking-tight mb-4 md:text-5xl md:mt-12">
                Client 1
            </h2>
            {/* Sub-header */}
            <p className=" text-gray-600 tracking-wider md:text-3xl md:mt-5">
                Dubai, United Arab Emirates
            </p>
        </div>





    </div>
  )
}

export default Gallery
