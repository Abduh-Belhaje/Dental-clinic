"use client";
import { Button } from "@/components/ui/button";
import whyImg from "../../assets/whyImg.jpg";
import Image from "next/image";

export default function Why() {
  return (
    <section className="w-full py-8 md:py-24 lg:py-16 h-1/2 bg-primary rounded-lg">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-start space-y-4 items-start">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
                Why Dental Pro Clinic?
              </h2>
              <p className="max-w-[600px] text-white md:text-xl ">
                We offer a wide range of dental services to keep your smile
                healthy and bright.
              </p>
            </div>
            <ul className="grid gap-2 py-4 text-white">
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Wide range of dental services
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Consultations with best doctors
              </li>
              <li className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Modern equipment and the latest dental implant technology
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Learn more about clinic
              </Button>
            </div>
          </div>
          <Image
            alt="Dental care items"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            height="550"
            src={whyImg}
            width="550"
          />
        </div>
      </div>
    </section>
  );
}
