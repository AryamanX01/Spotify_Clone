import React from "react";
import { assets } from "../assets/icons/assets";

const Topbar = () => {
  return (
    <nav className="flex justify-between items-center w-full h-15">
      <div className="text-white">
        <a>
          <img className="w-8 mx-7 my-4" src={assets.spotify_logo_white} />
        </a>
      </div>
      <span className=" flex flex-row justify-enter items-center mx-7">
        <span className="bg-[#1F1F1F] h-12 w-14 rounded-full mx-1 my-2 flex justify-center items-center hover:bg-[#2A2A2A] cursor-pointer transition duration-100 hover:scale-105">
          <img className="w-6 items-center" src={assets.home_icon} />
        </span>
        <span className="bg-[#1F1F1F] h-12 w-[100%] rounded-full mx-1 my-2 flex flex-row overflow-hidden hover:bg-[#2A2A2A] cursor-pointer">
          <img className="w-6 m-3" src={assets.search_icon} />
          <p className="text-[#B3B3B3] flex my-3 mx-1">
            What do you want to play?
          </p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p>&emsp;</p>
          <p className="text-[#B3B3B3] text-lg m-2">|</p>
          <img className="w-6 m-3" src={assets.browse_icon} />
        </span>
      </span>
      <div className="flex justify-between items-center mx-5 font-semibold">
        <span className="text-white bg-black h-12 w-24 rounded-full mx-1 my-2 flex justify-center items-center transition duration-100 hover:scale-105 cursor-pointer">
          Sign Up
        </span>
        <button className="text-black bg-white font-circular h-12 w-24 rounded-full mx-1 my-2 flex justify-center items-center transition duration-100 hover:scale-105">
          Log In
        </button>
      </div>
    </nav>
  );
};

export default Topbar;
