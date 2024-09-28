"use client";

import React from "react";
import Image from "next/image";
import Smile from "../../assets/smile.png";
import Heart from "../../assets/heart.png";
import Smile2 from "../../assets/Beautiful-smile.jpg";
import Deals from "../ui/Deals";
import BackgroundLines from "../../assets/BackgroundLines.jpg";
// import { Phone, Mail, Calendar } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Card, CardContent } from "@/components/ui/card";
// import Hy from "../../assets/Hy.png";
// import Doctor from "../../assets/Doctor.png";

export default function Header() {
  return (
    <div
      className="flex flex-col items-center py-10 text-background"
      style={{
        backgroundImage: `url(${BackgroundLines.src})`, // Replace with your image path
        backgroundSize: "cover", // Ensures the image covers the entire div
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div className="py-8 font-playfair flex flex-col items-center md:w-3/4 w-full">
        <div className="py-1 flex items-end md:justify-center justify-evenly w-full">
          <span className="lg:text-8xl md:text-6xl text-2xl font-bold ">
            Your dream
          </span>
          <Image
            src={Smile}
            className="rounded-3xl lg:h-20 lg:w-40 md:h-12 md:w-28 h-8 w-20 md:mx-5"
            alt=""
          />
        </div>
        <div className="py-1 flex items-end md:justify-center justify-evenly  w-full">
          <span className="lg:text-8xl md:text-6xl text-2xl font-bold">
            smile
          </span>
          <Image
            src={Smile2}
            className="rounded-3xl lg:h-20 lg:w-40 md:h-12 md:w-28 h-8 w-20 md:mx-5"
            alt=""
          />
          <span className="lg:text-8xl md:text-6xl text-2xl font-bold">
            is our
          </span>
        </div>
        <div className="flex md:items-end items-center md:justify-center justify-evenly   w-full">
          <Image src={Heart} className="md:w-36 w-16" alt="" />
          <span className="lg:text-8xl md:text-6xl text-2xl font-bold py-1">
            Care
          </span>
          <button className="bg-primary lg:text-lg text-sm text-white md:py-3 py-1 lg:px-10 px-5 rounded mx-10">
            Book Now !
          </button>
        </div>
      </div>
      <div className="flex md:flex-row flex-col lg:h-40 my-20 w-full ">
        <div className="flex flex-col px-5 h-full w-fit py-2 min-w-40">
          <span className="text-2xl font-bold">Best Deals</span>
          <span className="text-sm py-2 underline cursor-pointer text-gray-500">
            view all services
          </span>
        </div>
        <div className="px-20 flex lg:flex-row flex-col items-center w-full">
          <Deals title="Online Consultations" nb="1" />
          <Deals title="Online Consultations" nb="1" />
          <Deals title="Online Consultations" nb="1" />
        </div>
      </div>
    </div>
  );
}
