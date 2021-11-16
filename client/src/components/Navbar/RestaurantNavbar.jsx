import React from 'react'
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {IoMdArrowDropdown,IoMdArrowDropup} from "react-icons/io"
import {RiSearch2Line} from "react-icons/ri"
import { AiOutlineArrowLeft } from "react-icons/ai";

const MobileNav =() =>{
   return ( <div className="w-full flex items-center justify-between lg:hidden">
       <AiOutlineArrowLeft/>
           <div className="w-28">
                 <img src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png" alt="logo" className="w-full h-full" />
             </div>

             <div className="flex items-center gap-3">
               <a href="https://www.zomato.com/mobile " target="_blank" rel="noreferrer" >
               <button className="bg-zomato-400 text-white py-2 px-3 rounded-full ">
                     Use App
                 </button>
               </a>
                 
                 <span className="border border-gray-300 text-zomato-400 rounded-full p-2">
                 <FaUserAlt/>
                 </span>
             </div>
     </div>
     )
}

const LargeNav = () => {
  return (
    <>
    <div className=" hidden  lg:inline container px-20 xl:px-48 mx-auto"> 
      <div className="hidden gap-4 lg:flex items-center justify-around w-full ">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className=" w-3/4 bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3">
          <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
            <span className="text-zomato-400">
              <HiLocationMarker />
            </span>
            <input type="text" placeholder="Varanasi"  className="focus:outline-none"/>
            <IoMdArrowDropdown />
          </div>
          <div className="flex w-full items-center gap-2">
            <RiSearch2Line />
            <input
              type="search"
              placeholder="Search for Restaurant, Cuisine or a dish"
              className="w-full focus:outline-none"
            />
          </div>
        </div>
        
        <div className="ml-28 flex gap-4">
          <button className="text-gray-500 text-xl hover:text-gray-800">
            Login
          </button>
          <button className="text-gray-500 text-xl hover:text-gray-800">
            Signup
          </button>
        </div>
      </div>
      </div>
    </>
  );
};


const RestaurantNavbar = () => {
  return (
    <>
      <nav className="p-4 flex w-full items-center  bg-white shadow-md  lg:shadow-none ">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default RestaurantNavbar
