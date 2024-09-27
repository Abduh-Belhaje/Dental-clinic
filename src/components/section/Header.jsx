import React from "react";
import Doctor from "../../assets/Doctor.png";
import Image from "next/image";

export default function Header() {
  return (
    <div className="flex justify-beetwen">
      <div className="flex flex-col justify-center py-10 w-full border">
        <span className="text-2xl">Hey! we Are Dentic</span>
        <span>Helping You to Bring Back Your Happy Smile</span>
        <p>
          Welcome to [Clinic Name], where your smile is our priority. Located in
          the heart of Miami, we offer top-quality dental care for the whole
          family, specializing in everything from routine checkups to advanced
          cosmetic treatments. Book your appointment tservicesoday and
          experience gentle, compassionate care in a comfortable environment.
        </p>
      </div>
      <div className="relative border">
        <Image src={Doctor} alt="" className="object-cover" />
      </div>
    </div>
  );
}
