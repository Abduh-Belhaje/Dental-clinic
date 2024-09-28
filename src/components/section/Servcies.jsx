"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import serviceImg from "../../assets/serviceImg.jpg";
import serviceImg2 from "../../assets/107047615_dentist2.jpg";

const services = [
  {
    title: "Clear Aligners",
    description:
      'Welcome to Bayfront, where your smile is our priority. Located in the heart of Miami, we offer top-quality dental care for the whole family, specializing in everything from routine checkups to advanced cosmetic treatments. Book your appointment today and experience gentle, compassionate care in a comfortable environment.',
    image: serviceImg,
  },
  {
    title: "Teeth Whitening",
    description:
      "Welcome to Bayfront, where your smile is our priority. Located in the heart of Miami, we offer top-quality dental care for the whole family, specializing in everything from routine checkups to advanced cosmetic treatments. Book your appointment today and experience gentle, compassionate care in a comfortable environment.",
    image: serviceImg2,
  },
];

export default function Services() {
  const [currentService, setCurrentService] = useState(0);

  return (
    <section className="w-full py-12 py-16 md:pt-64 pt-36">
      <div className=" px-5 flex justify-between items-center mb-6">
              <h2 className="text-4xl font-medium tracking-tighter sm:text-7xl">
                Our Services
              </h2>
              <Button variant="outline" className="px-8 rounded-2xl" >View all</Button>
      </div>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="relative aspect-square lg:w-1/2">
            <Image
              alt={services[currentService].title}
              className="object-cover w-full h-full rounded-lg"
              height={600}
              src={services[currentService].image}
              width={600}
              style={{
                aspectRatio: "1/1",
                objectFit: "cover",
              }}
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentService ? "bg-white" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentService(index)}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-col space-y-4 lg:w-1/2">
            <h3 className="text-2xl font-bold">
              {services[currentService].title}
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              {services[currentService].description}
            </p>
            <Button className="w-fit">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
