import React from 'react'
import Navbar from "../../components/Navbar";
import Banner from '../../components/Banner';

const Home = () => {
    return (
      <>
        <div className="flex-col align-middle">
          <Navbar/>
          <Banner/>
        </div>
      </>
    );
  }
  
export default Home;