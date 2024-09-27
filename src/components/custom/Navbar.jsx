"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Logo from "../../assets/Logo.png";
import Image from "next/image";
import Button from "../ui/Button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative ">
      {" "}
      {/* Set position relative on nav */}
      <div className="flex items-center justify-between h-16">
        <div className="flex-shrink-0">
          <Image className="h-8 w-auto" src={Logo} alt="Logo" />
        </div>
        <div className="hidden md:block">
          <div className="ml-10 flex items-baseline space-x-4">
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="/about" passHref>
              About
            </Link>
            {/* <Link href="/services" passHref> */}
            {/* Services
            </Link> */}
            <Link href="/contact" passHref>
              Contact
            </Link>
          </div>
        </div>
        <div className="hidden md:block">
          <Button
            value="Call us"
            style="border px-5 py-1 rounded-xl bg-white text-primary"
          />
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              <X className="block h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="block h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute text-white top-15 w-full bg-primary bg-opacity-90 z-50 md:hidden border">
          {" "}
          {/* Absolute positioning */}
          <div className="flex flex-col items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" passHref>
              Home
            </Link>
            <Link href="/about" passHref>
              About
            </Link>
            <Link href="/services" passHref>
              Services
            </Link>
            <Link href="/contact" passHref>
              Contact
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-2">
              <Button value="Call us" style="w-full" />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
