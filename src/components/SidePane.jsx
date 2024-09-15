import React from "react";
import { assets } from "../assets/icons/assets";

const SidePane = () => {
  return (
    <div className="bg-[#121212] w-[22%] mx-2 my-1 rounded-lg text-white flex-col overflow-auto">
      <div className="mx-6 my-4 flex justify-between align-center cursor-default">
        <img className="w-6 h-6" src={assets.stack_icon} alt="" />
        <p className="text-white font-bold">Your Library</p>
        <img
          className="w-4 h-4 mx-2 my-2 transform transition duration-100 hover:scale-110"
          src={assets.plus_icon}
          alt=""
        />
      </div>
      <div className="bg-[#1F1F1F] flex-col m-2 rounded-lg cursor-default">
        <p className="mx-5 py-2 font-bold">Create your first playlist</p>
        <p className="mx-5 py-1 text-sm">It&apos;s easy, we&apos;ll help you</p>
        <button className="bg-white text-black w-25 h-8 mx-5 my-3 rounded-full justify-between font-bold text-sm px-3 overflow-hidden transition duration-100 hover:scale-105">
          Create playlist
        </button>
      </div>
      <div className="bg-[#1F1F1F] flex-col m-2 rounded-lg cursor-default">
        <p className="mx-5 py-2 font-bold">
          Let&apos;s find some podcasts to follow
        </p>
        <p className="mx-5 py-1 text-sm">
          We&apos;ll keep you updated on new episodes
        </p>
        <button className="bg-white text-black w-25 h-8 mx-5 my-3 rounded-full justify-center font-bold text-sm px-3 overflow-hidden transition duration-100 hover:scale-105">
          Browse Podcasts
        </button>
      </div>
      <div className="bg-[#1F1F1F] flex-col m-2 rounded-lg cursor-default">
        <span className="flex-col justify-center align-center text-xs font-thin overflow-auto cursor-pointer">
          <p className="mx-5">&emsp;</p>
          <p className="mx-5">Legal</p>
          <p className="mx-5">Safety&PrivacyCenter</p>
          <p className="mx-5">Legal</p>
          <p className="mx-5">PrivacyPolicy</p>
          <p className="mx-5">Cookies</p>
          <p className="mx-5">About Ads</p>
          <p className="mx-5">Accessibility</p>
        </span>
        <button className="border border-white text-white text-sm px-4 py-1 font-thin w-15 h-9 mx-5 my-3 rounded-full justify-center align-center overflow-hidden transition duration-100 hover:scale-105">
          English
        </button>
      </div>
    </div>
  );
};

export default SidePane;
