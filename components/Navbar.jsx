"use client"
import { Menu, X, ArrowRight  } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='absolute top-0 left-0 right-0 w-full md:fixed md:top-7 md:left-5 md:right-6 md:w-auto bg-white z-11 p-4 border-1 border-gray-300 shadow'>
        <div className="w-full h-10 md:h-25 flex items-center justify-between">
          
          {/* Mobile: Button on Left */}
          <button className="flex flex-row text-gray-700 hover:text-black items-center bg-white text-gray-700 px-4 py-2 w-38 ml-2 h-10 border-2 border-gray-700 md:hidden ">
            <p className="text-sm mr-3 ">Contact us</p>
            <p className="text-base mb-1"><ArrowRight size={24} className='mt-1'/></p>
          </button>

          {/* Links on Left for desktop view*/}
          <div className="hidden md:flex w-auro">
            <a href="#" className="text-lg text-gray-700 hover:text-black ml-9">About</a>
            <a href="#" className="text-lg text-gray-700 hover:text-black ml-7">News</a>
            <a href="#" className="text-lg text-gray-700 hover:text-black ml-8">Services</a>
            <a href="#" className="text-lg text-gray-700 hover:text-black ml-8">Our Team</a>
            <a href="#" className="text-lg text-gray-700 hover:text-black ml-8">Make Enquiry</a>

          </div>

          {/* Button on Right for desktop view*/}
          <button className="hidden md:flex flex-row text-gray-700 hover:text-black items-center bg-white text-gray-700 px-4 py-2 md:w-49 md:mr-7 md:h-12 md:border-2 md:border-gray-700">
            <p className="md:text-xl md:mr-4 md:ml-1">Contact us</p>
            <p className="md:text-xl"><ArrowRight size={25} className='md:mt-1'/></p>
          </button>

          {/* Menu Icon on Right for mobile view */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} color='gray'className='w-9 h-9 p-2'  style={{backgroundColor:"#F9F4EE"}} />}
          </button>
        </div>

        {/* Dropdown Menu for mobile view*/}
        {isOpen && (
          <div className="md:hidden bg-gray-100 mt-2 p-4 space-y-2">
            <a href="#" className="block text-gray-700">About</a>
            <a href="#" className="block text-gray-700">News</a>
            <a href="#" className="block text-gray-700">Services</a>
            <a href="#" className="block text-gray-700">Make Enquiry</a>
          </div>
        )}

    </nav>
  )
}

export default Navbar