"use client";

import * as React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import EmergencyDentistry from "../../assets/EmergencyDentistry.jpg";

const services = [
  {
    title: "Dental Implants",
    image: EmergencyDentistry,
  },
  {
    title: "Dental Treatment",
    image: EmergencyDentistry,
  },
  {
    title: "Ozone Cleaning",
    image: EmergencyDentistry,
  },
  {
    title: "Dental Crowns",
    image: EmergencyDentistry,
  },
];

export default function ServiceSlider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 mb-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {services.map((service, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white text-center">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
