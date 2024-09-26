import Header from "@/components/section/Header";
import Services from "@/components/section/Services";
import TestimonialSlider from "@/components/section/TestimonialSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <Services />
      <TestimonialSlider />
    </div>
  );
}
