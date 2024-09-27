"use client";

import React from "react";
import Image from "next/image";
import { Phone, Mail, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Hy from "../../assets/Hy.png";
import Doctor from "../../assets/Doctor.png";

export default function Header() {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col md:py-28 py-16 px-4 md:px-8 lg:px-16">
          <div className="flex items-center space-x-2 text-sm">
            <Image src={Hy} alt="Dentic Logo" width={20} height={20} />
            <span>Hey! We Are Dentic</span>
          </div>
          <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold md:pb-16 pb-10 pt-10 md:w-4/5">
            Helping You to Bring Back Your Happy Smile
          </h1>
          <p className="text-sm text-muted-foreground md:w-4/5 text-justify">
            Welcome to Bayfront, where your smile is our priority. Located in
            the heart of Miami, we offer top-quality dental care for the whole
            family, specializing in everything from routine checkups to advanced
            cosmetic treatments. Book your appointment today and experience
            gentle, compassionate care in a comfortable environment.
          </p>
          <Button className="md:hidden mt-8 w-fit">Book now!</Button>
        </div>
        <div className="w-full bg-blue-100 h-[400px] md:h-auto relative">
          <Image src={Doctor} alt="Doctor" layout="fill" objectFit="cover" />
        </div>
      </div>

      <Card className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 max-w-5xl">
        <CardContent className="p-6">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Phone"
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">
                Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input id="date" type="date" className="pl-10" />
              </div>
            </div>
            <div className="flex items-end">
              <Button className="w-full">Book now!</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
