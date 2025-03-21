import React from 'react'
import Navbar from "../../components/Navbar";
import Banner from '../../components/Banner';
import Gallery from '../../components/Gallery';

const Home = () => {
    return (
      <>
        <div className="flex-col align-middle">
          <Navbar/>
          <Banner/>
          <Gallery/>
        </div>
      </>
    );
  }
  
export default Home;