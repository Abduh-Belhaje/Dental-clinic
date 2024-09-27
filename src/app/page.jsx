import BusinessHours from "@/components/section/BusinessHours";
import Header from "@/components/section/Header";
import Hero from "@/components/section/Hero";
import Services from "@/components/section/Services";
import TestimonialSlider from "@/components/section/TestimonialSlider";

export default function Home() {
  return (
    <div>
      <div id="book">
        <Header />
      </div>
      <Hero />
      <BusinessHours />
      <div id="services">
        <Services />
      </div>
      <TestimonialSlider />
    </div>
  );
}
