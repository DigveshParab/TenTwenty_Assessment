"use client"
import Image from 'next/image'
import React, { useEffect,useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import {motion} from 'framer-motion'

const ImageSlider = ({galleryImages}) => {
    const [centeredIndex, setCenteredIndex] = useState(0);

    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        containScroll:false,
    });
    
    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setCenteredIndex(emblaApi.selectedScrollSnap());
        emblaApi.on("select", onSelect);
        onSelect();
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi && emblaApi.scrollSnapList().length > 0) {
            emblaApi.reInit();
            emblaApi.scrollTo(2)
        }
    }, [emblaApi]);
  
    return (
        <div className='relative w-full flex justify-center items-center overflow-hidden flex-col'>
                <div className="relative w-full flex justify-center items-center overflow-hidden flex-col">
                    <div className="relative w-[100%] min-h-[550px] md:min-h-[460px] mt-0 flex justify-center md:mt-30">
                        <div className="relative w-full" ref={emblaRef}>
                        <div className="relative flex ml-0 md:mr-2">
                            { galleryImages.length > 0 && galleryImages.map((img, index) => (
                            <div
                                key={index}
                                className={`relative min-w-[240px] h-[320px] ml-10 mr-10 md:min-w-[460px] md:h-[630px] transition-all duration-500 ease-in-out transform  md:ml-45 md:mr-45 ${
                                    index === centeredIndex ? "mt-15" : index < centeredIndex ? " rotate-[-15deg] mt-30 md:mt-45":"rotate-[15deg] mt-30 md:mt-45"
                                }`}
                            >
                                <Image
                                    src={img.src}
                                    alt={`Slide ${index}`}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            ))}
                        </div>
                        </div>
                    </div>
                    <div className="w-full h-[500px] flex flex-col -mt-90 justify-center items-center text-center md:-mt-55">
                        {/* Header */}
                        <motion.h2
                            key={`header-${centeredIndex}`} 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{duration: 0.7, ease: "easeInOut"}}
                            className="text-2xl text-black tracking-tight mb-4 md:text-5xl md:mt-12"
                        >
                            {galleryImages[centeredIndex].title}
                        </motion.h2>
                            {/* subheader */}
                        <motion.p
                            key={`subheader-${centeredIndex}`} 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0}}
                            transition={{duration: 0.5, ease: "easeInOut",delay:0.5}}
                            className="text-gray-600 tracking-wider md:text-3xl md:mt-5"
                        >
                            {galleryImages[centeredIndex].subtitle}
                        </motion.p>
                    </div>
                </div>
        </div>
  )
}

export default ImageSlider