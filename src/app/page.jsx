"use client"
import React, { useState } from 'react'
import Navbar from "../../components/Navbar";
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';
import FlashScreen from '../../components/FlashScreen';

const Home = () => {
  const [showFlash, setShowFlash] = useState(true);

    return (
      <>
        <div className="flex-col align-middle">
        {showFlash ? <FlashScreen onFinish={() => setShowFlash(false)} /> : 
          <>
            <Navbar/>
            <Banner/>
            <Gallery/>  
          </>
        

        }
        </div>
      </>
    );
  }
  
export default Home;