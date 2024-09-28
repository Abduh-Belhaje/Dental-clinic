"use client";

import React from "react";
import Image from "next/image";
import Smile from "../../assets/smile.png";
import Heart from "../../assets/heart.png";
import Smile2 from "../../assets/Beautiful-smile.jpg";
import Deals from "../ui/Deals";
import BackgroundLines from "../../assets/bg.png";

export default function Header() {
  return (
    <div
      className="flex flex-col items-center py-10 text-background mb-24 "
      style={{
        backgroundImage: `url(${BackgroundLines.src})`,
        backgroundSize: 'cover', // Change to 'cover' or specify dimensions as needed
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', // Prevents the image from repeating
      }}
      >
      <div className="py-8 font-playfair flex flex-col items-center md:w-9/12 w-11/12">
          <div className="py-1 flex items-center md:justify-center justify-evenly w-full">
            <span className="lg:text-9xl md:text-7xl text-4xl font-medium ">Your dream</span>
            <Image src={Smile} className="rounded-3xl lg:h-20 lg:w-40 md:h-12 md:w-28 h-8 w-20 md:mx-5" alt=""/>
            </div>
          <div className="py-1 flex items-center  md:justify-center justify-evenly w-full">
          <span className="lg:text-9xl md:text-7xl text-4xl font-medium">smile</span>
          <Image src={Smile2} className="rounded-3xl lg:h-20 lg:w-40 md:h-12 md:w-28 h-8 w-20 md:mx-5" alt=""/> 
            <span className="lg:text-9xl md:text-7xl text-4xl font-medium">is our</span>
            </div>
          <div className="flex md:items-center items-center md:justify-center justify-evenly w-full">
            <Image src={Heart} className="lg:w-28 md:w-16 w-12  md:mr-10" alt=""/>
            <span className="lg:text-9xl md:text-7xl text-4xl font-medium py-1">Care</span> 
            <button className="border bg-primary lg:text-lg text-xs text-white md:py-4 py-2 lg:px-10 md:px-16 px-8 rounded-3xl sm:mx-10">Book Now !</button> 
            </div>
      </div>
      <div className="flex md:flex-row flex-col lg:h-40 my-20 w-full ">
        <div className="flex flex-col px-5 h-full w-fit py-2 min-w-40">
          <span className="text-2xl font-medium">Best Deals</span>
          <span className="text-sm py-2 underline cursor-pointer text-gray-500">
            view all services
          </span>
        </div>
        <div className="px-20 flex lg:flex-row flex-col items-center w-full">
            <Deals title="Online Consultations" nb="1" order="1" />
            <Deals title="Best Denstists" nb="2" />
            <Deals title="20+ Clinics" nb="3" />
        </div>
      </div>
    </div>
  );
}
