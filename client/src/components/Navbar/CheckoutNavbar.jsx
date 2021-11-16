import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";

const RestaurantNavbar = () => {
  return (
    <>
      <nav className="p-4 flex w-full items-center  bg-white shadow-md  lg:shadow-none ">
      <div className="container mx-auto px-4 lg:px-20 xl:px-48">
      <div className="w-full flex items-center justify-between ">
          <AiOutlineArrowLeft />
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>

          <div className="flex items-center gap-2">
            <span className="border flex items-center gap-2 border-gray-300 text-zomato-400 rounded-full p-2">
              <FaUserAlt /> 
            </span>
            Kushagra
          </div>
        </div>
      </div>
      </nav>
    </>
  );
};

export default RestaurantNavbar;
