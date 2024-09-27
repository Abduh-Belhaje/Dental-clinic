import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function BusinessHours() {
  return (
    <div className="container mx-auto px-4 py-20 md:py-0 ">
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <Button variant="outline" size="sm" className="text-primary">
              Why Choose Us
            </Button>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold  mt-4">
              Helping Your Dental Problems
            </h2>
          </div>
          <p className="text-muted-foreground">
            We believe that every smile tells a story, and we re here to help
            make yours shine. Our Miami-based dental clinic is led by Dr.
            [Name], a passionate and highly qualified dentist with over [X]
            years of experience. Our team is dedicated to providing
            personalized, gentle care, ensuring that every visit is as
            comfortable as possible.
          </p>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Dental and Mouth Care</span>
                <span className="font-semibold">95%</span>
              </div>
              <Progress value={95} className="h-2" />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Cosmetic Treatment</span>
                <span className="font-semibold">87%</span>
              </div>
              <Progress value={87} className="h-2" />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-3xl font-bold pt-5 ">
                Don t Hesitate to Do Consultation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                We re here to address your dental concerns and provide expert
                advice. Schedule a consultation with our experienced team today.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Monday – Friday</span>
                  <span>9 AM – 5 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Saturday</span>
                  <span>9 AM – 2 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <a href="#book" className="my-5">
                <Button className="w-full my-5">Book now</Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
