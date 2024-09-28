import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/custom/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Bayfront",
  description: "Dental Clinic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" /> {/* Favicon */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-background md:px-10 px-5  antialiased overflow-x-hidden`}
      >
        <Navbar />
        <div className="bg-white rounded-md">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
