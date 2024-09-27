"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import patient from "../../assets/patient.jpg";
import patient1 from "../../assets/patient1.png";
import patient4 from "../../assets/patient4.png";
import patient2 from "../../assets/patient2.png";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Patient",
    image: patient,
    quote:
      "I used to dread going to the dentist, but this clinic has completely changed my perspective. The staff is incredibly friendly, and Dr. Smith's gentle approach made my treatment comfortable and stress-free.",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Parent",
    image: patient1,
    quote:
      "As a parent, I appreciate how well they handle children. My kids actually look forward to their dental check-ups now! The waiting area with games and books is a nice touch.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Patient",
    image: patient4,
    quote:
      "I had a dental emergency and they accommodated me immediately. The care I received was top-notch, and the follow-up was impressive. I couldn't be happier with my experience.",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Patient",
    image: patient2,
    quote:
      "The team here is fantastic! They explained every step of my treatment plan clearly and made sure I was comfortable throughout. I highly recommend this clinic to anyone looking for quality dental care.",
  },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000); // Auto-advance every 5 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 my-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          What Our Patients Say
        </h2>
        <div className="relative">
          <Card className="bg-white shadow-lg max-w-4xl mx-auto">
            <CardContent className="p-8">
              <Quote className="w-12 h-12 text-primary mb-6 mx-auto" />
              <div className="text-center">
                <p className="text-xl text-gray-700 italic mb-6">
                `&quots;`{testimonials[currentIndex].quote} `&quots;`
                </p>
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">
                      {testimonials[currentIndex].name}
                    </p>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="absolute top-1/2 left-0 right-0 flex justify-between items-center px-4 -mt-6">
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-md hover:bg-gray-100"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white shadow-md hover:bg-gray-100"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
