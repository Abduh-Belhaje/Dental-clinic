"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import serviceImg from "../../assets/serviceImg.jpg";

const services = [
  {
    title: "Clear Aligners",
    description:
      'Clear aligners are orthodontic devices that are a transparent, plastic form of dental braces used to adjust teeth. They are often referred to as "invisible braces." Clear aligners have been gaining popularity among adults who want to straighten their teeth discreetly. They are removable and nearly invisible, making them a convenient choice for many patients.',
    image: serviceImg,
  },
  {
    title: "Teeth Whitening",
    description:
      "Professional teeth whitening is a cosmetic dental procedure that removes stains and discoloration from teeth, resulting in a brighter and more attractive smile. This treatment is popular among individuals looking to enhance their appearance and boost their confidence.",
    image: serviceImg,
  },
];

export default function Services() {
  const [currentService, setCurrentService] = useState(0);

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
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
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Our Services
              </h2>
              <Button variant="outline">View all</Button>
            </div>
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
