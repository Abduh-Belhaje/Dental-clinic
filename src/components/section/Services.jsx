"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile, Users, Coffee, Calendar } from "lucide-react";
import srvPic from "../../assets/srvPic.png";

// Professional Features Data
const professionalFeatures = [
  {
    icon: <Smile className="w-12 h-12 text-primary mb-4" />,
    title: "Patient-Centered Care",
    description:
      "Our approach prioritizes patient comfort and trust at every step.",
    details:
      "We ensure a professional, personalized experience, utilizing the latest techniques and technologies for optimal care.",
  },
  {
    icon: <Users className="w-12 h-12 text-primary mb-4" />,
    title: "Comprehensive Family Care",
    description:
      "Expert dental care tailored to meet the needs of every family member.",
    details:
      "We provide specialized treatments across all age groups, ensuring high-quality care in a welcoming environment.",
  },
  {
    icon: <Coffee className="w-12 h-12 text-primary mb-4" />,
    title: "Modern Comfort",
    description:
      "Our clinic offers a relaxing, well-equipped environment for every visit.",
    details:
      "Enjoy a serene waiting area with modern amenities designed to enhance your overall experience while you wait.",
  },
  {
    icon: <Calendar className="w-12 h-12 text-primary mb-4" />,
    title: "Flexible Appointments",
    description:
      "Efficient scheduling options designed to fit into your busy routine.",
    details:
      "We offer early morning, evening, and weekend appointments to accommodate your lifestyle, including emergency care as needed.",
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="my-3 py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome to Our Dental Clinic
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering excellence in dental care with a focus on professionalism
            and patient satisfaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={srvPic}
              alt="Professional dental team"
              className="object-cover w-full h-full"
              layout="fill"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {professionalFeatures.map((feature, index) => (
              <Card
                key={index}
                className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <CardContent className="p-6">
                  {feature.icon}
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div
                    className={`absolute inset-0 bg-blue-600/90 text-primary-foreground p-4 transition-all duration-300 ease-in-out flex flex-col justify-center ${
                      hoveredIndex === index
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                    aria-hidden={hoveredIndex !== index}
                  >
                    <h3 className="text-lg font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm">{feature.details}</p>
                  </div>
                </CardContent>
                <div
                  className={`absolute bottom-2 right-2 text-sm font-semibold transition-opacity duration-300 ${
                    hoveredIndex === index ? "opacity-0" : "opacity-100"
                  }`}
                >
                  Learn More
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary text-white hover:bg-blue-600">
            Schedule Your Visit
          </Button>
        </div>
      </div>
    </section>
  );
}
