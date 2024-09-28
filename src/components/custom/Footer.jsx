"use client";
import Logo from "../../assets/Logo.png";
import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="text-gray-600 py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div className="text-center md:text-left">
            <Image className="h-8 w-auto" src={Logo} alt="Logo" />

            <p className="mb-4 text-sm md:text-base my-5">
              Providing quality dental care.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/BayfrontDental?_rdc=1&_rdr"
                aria-label="Facebook"
                className="hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/bayfrontdental_miami"
                aria-label="Instagram"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCnwlODjOz8k_35-s8yX4lLg"
                aria-label="Youtube"
                className="hover:text-primary transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm md:text-base">
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  General Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Cosmetic Dentistry
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Orthodontics
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Dental Implants
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-primary transition-colors"
                >
                  Emergency Dentistry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic text-sm md:text-base">
              <p>224 SE 1st St</p>
              <p>Miami, FL 33131</p>
              <p className="mt-2">Phone: (305) 530-1866</p>
              <p className="flex items-center justify-center md:justify-start mt-2">
                <Mail className="h-4 w-4 mr-2" />
                <a
                  href="mailto:info@smilebrightdental.com"
                  className="hover:text-primary transition-colors"
                >
                  info@bayfrontdental.com
                </a>
              </p>
            </address>
          </div>

          {/* Newsletter Subscription */}
          <div className="text-center md:text-left">
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="mb-4 text-sm md:text-base">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full"
                required
              />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; 2024 Bayfront Dental. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
