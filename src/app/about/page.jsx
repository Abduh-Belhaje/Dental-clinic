"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Smile, Heart, Award, ChevronRight } from "lucide-react";
import DavidWeiner from "../../assets/DavidWeiner.png";
import GeorgeGounakis from "../../assets/GeorgeGounakis.png";
import taylorlight from "../../assets/taylorlight.png";
import lily from "../../assets/lily.png";
import niuris from "../../assets/niuris.png";
import anabella from "../../assets/anabella.png";
import ivette from "../../assets/ivette.png";
import stephanie from "../../assets/stephanie.png";
import virginia from "../../assets/virginia.png";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 text-blue-900">
          About Bayfront Dental
        </h1>

        {/* Welcome Message */}
        <section className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-blue-800">
            Welcome to Bayfront Dental
          </h2>
          <p className="text-xl text-black">
            At Bayfront Dental, we re committed to providing top-notch dental
            care in a warm, personalized environment. Our team of experienced
            professionals is dedicated to ensuring your comfort and delivering
            exceptional results.
          </p>
        </section>

        {/* Dentist Introductions */}
        <section className="mb-16 my-6">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800 text-center">
            Meet Our Dentists
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DentistCard
              name="Dr. David Weiner"
              image={DavidWeiner}
              bio="Dentistry is a science and an art. I take pride in creating a beautiful smile that combines my high aesthetic standards with the most up-to-the-minute dental technology."
            />
            <DentistCard
              name="Dr. George Gounakis"
              image={GeorgeGounakis}
              bio="Some people feel that implant dentistry falls under the category of cosmetic dentistry, but that s not entirely accurate. Although implants certainly do improve one appearance, their impact goes way beyond the flash of a perfect smile."
            />
            <DentistCard
              name="Dr. Taylor Light"
              image={taylorlight}
              bio="As your dentist, I want to be your partner in achieving and maintaining your BEST oral health. Whether you re looking to attain a dazzling smile or want to ensure that your gut microbiome is healthy, my goal is to make sure you re maintaining your optimal dental health."
            />
          </div>
        </section>

        {/* Team Introduction */}
        <section className="mb-16 my-12">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800 text-center pt-32">
            Meet the Team
          </h2>
          <p className="text-xl text-black text-center mb-8 max-w-3xl mx-auto">
            Our experienced team has been together for years, committed to
            creating a comfortable, stress-free, and rewarding dental experience
            for you and your family.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <TeamMember
              name="Lily"
              role="Patient Care Coordinator"
              image={lily}
            />
            <TeamMember
              name="Annabella"
              role="Dental Hygienist"
              image={anabella}
            />
            <TeamMember name="Niuris" role="Dental Hygienist" image={niuris} />
            <TeamMember name="Ivette" role="Dental Assistant" image={ivette} />
            <TeamMember
              name="Stephanie"
              role="Patient Care Coordinator"
              image={stephanie}
            />
            <TeamMember
              name="Virginia"
              role="Dental Assistant"
              image={virginia}
            />
          </div>
        </section>

        {/* Mission & Values */}
        <section className=" my-12">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800 text-center pt-32">
            Our Mission & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-blue-50 border border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Smile className="mr-2 text-blue-500" />
                  Excellence in Care
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black">
                We strive to provide the highest quality dental care using the
                latest technology and techniques.
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Heart className="mr-2 text-red-500" />
                  Patient-Centered Approach
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black">
                We prioritize our patients comfort, needs, and overall
                well-being in every aspect of our practice.
              </CardContent>
            </Card>
            <Card className="bg-blue-50 border border-blue-300">
              <CardHeader>
                <CardTitle className="flex items-center text-blue-800">
                  <Award className="mr-2 text-yellow-500" />
                  Continuous Improvement
                </CardTitle>
              </CardHeader>
              <CardContent className="text-black">
                We are committed to ongoing education and staying at the
                forefront of dental advancements.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-8 text-blue-800 text-center my-8">
            Why Choose Bayfront Dental?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureItem text="Over 35 years of experience in providing exceptional dental care" />
            <FeatureItem text="State-of-the-art technology and modern treatment techniques" />
            <FeatureItem text="Comprehensive range of dental services under one roof" />
            <FeatureItem text="Warm, welcoming environment with a focus on patient comfort" />
            <FeatureItem text="Personalized treatment plans tailored to your unique needs" />
            <FeatureItem text="Commitment to ongoing education and staying current with dental advancements" />
          </div>
        </section>
      </div>
    </div>
  );
}

function DentistCard({ name, image, bio }) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-center text-blue-800">{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-black">{bio}</p>
      </CardContent>
    </Card>
  );
}

function TeamMember({ name, role, image }) {
  return (
    <div className="text-center my-4">
      {/* <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-blue-300">
        <AvatarImage src={image} alt={name} />

        <AvatarFallback className="bg-blue-100 text-blue-700">
          {name[0]}
        </AvatarFallback>
      </Avatar> */}
      <Image
        src={image}
        alt={name}
        className="object-cover w-full h-full transition-all duration-300 hover:scale-105"
      />
      <h3 className="font-semibold text-blue-800 mt-2">{name}</h3>
      <p className="text-sm text-black">{role}</p>
    </div>
  );
}

function FeatureItem({ text }) {
  return (
    <div className="flex items-center space-x-2 bg-blue-100 p-4 rounded-lg">
      <ChevronRight className="text-blue-500 flex-shrink-0" />
      <p className="text-black">{text}</p>
    </div>
  );
}
