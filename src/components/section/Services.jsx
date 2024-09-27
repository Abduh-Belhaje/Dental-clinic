"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import GeneralDentistry from "../../assets/GeneralDentistry.jpg";
import CosmeticDentistry from "../../assets/CosmeticDentistry.jpg";
import Orthodontics from "../../assets/Orthodontics.jpg";
import DentalImplants from "../../assets/DentalImplants.jpg";
import EmergencyDentistry from "../../assets/EmergencyDentistry.jpg";
import PediatricDentistry from "../../assets/PediatricDentistry.jpg";

// Sample service data with images
const services = [
  {
    title: "General Dentistry",
    description:
      "Keep your smile healthy with our comprehensive checkups, cleanings, and preventative care.",
    image: GeneralDentistry,
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Boost your confidence with treatments like veneers, teeth whitening, and smile makeovers.",
    image: CosmeticDentistry,
  },
  {
    title: "Orthodontics",
    description:
      "Achieve straighter teeth with options that suit your lifestyle, including braces and Invisalign.",
    image: Orthodontics,
  },
  {
    title: "Dental Implants",
    description:
      "Restore your smile with permanent, natural-looking dental implants.",
    image: DentalImplants,
  },
  {
    title: "Emergency Dentistry",
    description:
      "We offer same-day emergency appointments for those unexpected dental issues.",
    image: EmergencyDentistry,
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Our kid-friendly team is here to make sure your child's teeth stay healthy and strong.",
    image: PediatricDentistry,
  },
];

export default function ServiceSection() {
  return (
    <section
      className="py-32 bg-cover bg-center"
      style={{ backgroundImage: "url('/path/to/your/background-image.jpg')" }} // Replace with actual background image path
    >
      <div className="container mx-auto px-4 py-16 bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          At bayfrontdental, we offer a full range of dental services to meet
          all of your needs. Whether it's a routine cleaning or a more complex
          treatment, you're in great hands.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="relative group overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Background image covering entire card */}
              <div className="relative h-64 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
                {/* Title at the bottom-left with white background */}
                <div className="absolute bottom-0 left-0 bg-white bg-opacity-80 p-4 z-10">
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>

                {/* Hidden description that appears on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center px-4">
                    {service.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
