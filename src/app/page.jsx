"use client";

import Booking from "@/components/section/Booking";
import BusinessHours from "@/components/section/BusinessHours";
import Header from "@/components/section/Header";
import Servcies from "@/components/section/Servcies";
import ServcieSlider from "@/components/section/ServiceSlider";
import Why from "@/components/section/Why";
// import Hero from "@/components/section/Hero";
// import Services from "@/components/section/Services";
// import TestimonialSlider from "@/components/section/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <Header />
      <Why />
      <div id="services">
        <Servcies />

        <ServcieSlider />
      </div>
    </div>
  );
}
