import heroImage1 from "../assets/bg2.png";
import heroImage2 from "../assets/bg.png";
import heroImage3 from "../assets/bg3.png";

import heroMobile1 from "../assets/bgm.png";
import heroMobile2 from "../assets/bgm2.png";
import heroMobile3 from "../assets/bgm3.png";

import logo from "../assets/logo-1.png";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const heroImages = [
  { desktop: heroImage1, mobile: heroMobile1 },
  { desktop: heroImage2, mobile: heroMobile2 },
  { desktop: heroImage3, mobile: heroMobile3 },
];

export function Hero() {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);

  useEffect(() => {
    heroImages.forEach((img) => {
      const imageDesktop = new Image();
      imageDesktop.src = img.desktop;

      const imageMobile = new Image();
      imageMobile.src = img.mobile;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden w-full"
      style={{ marginTop: "30px", minHeight: "calc(100vh - 84px)" }}
    >
      {/* <div className="absolute inset-0">
        <img src={heroImage1} alt="" className="w-full h-full object-cover object-center blur-[1.5px]" />
      </div> */}

      <div className="absolute inset-0 overflow-hidden">
        {heroImages.map((img, index) => (
          <motion.img
            key={index}
            src={isMobile ? img.mobile : img.desktop}
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center blur-[1.5px]"
            initial={{ opacity: index === 0 ? 1 : 0, scale: 1.05 }} // Start with the first image visible and slightly zoomed in
            animate={{
              opacity: currentHeroImage === index ? 1 : 0,
              scale: currentHeroImage === index ? 1 : 1.05,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="container mx-auto px-6 py-20 relative z-10 min-h-[calc(100vh-84px)] flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
          {/* Left Content */}
          <div className="flex-1 text-white max-w-3xl">
            <div className="space-y-6 mb-12">
              <div className="space-y-3">
                <img
                  src={logo}
                  alt="Shaheen Global Academy Logo"
                  className="h-16 w-auto mb-[-10px] drop-shadow-lg"
                />
                <h1
                  className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] leading-[1.1] tracking-wide"
                  style={{
                    WebkitTextStroke: "1.1px rgba(254, 250, 255, 0.3)",
                    textShadow: "0 6px 30px rgba(255,0,0,0.3)",
                  }}
                >
                  Shaheen Global Academy
                </h1>
                <div className="flex items-center gap-3">
                  <div className="h-px w-12 bg-[#9ae600]"></div>
                  <span
                    className="text-[#9AE600] text-sm tracking-wider uppercase"
                    style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 1)" }}
                  >
                    Katauli, Lucknow
                  </span>
                </div>
              </div>
              <p
                className="text-white/80 max-w-xl text-base sm:text-lg md:text-lg leading-relaxed"
                style={{ textShadow: "0 2px 8px rgba(0, 0, 0, 1)" }}
              >
                Empowering students to seize opportunities through excellence in
                education.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#enquiry"
                className="border border-[#9AE600] text-white max-w-fit px-4 py-3 sm:px-8 sm:py-3.5 rounded-full transition-all duration-300 hover:bg-[#9AE600] hover:text-gray-900 hover:shadow-lg hover:scale-105 font-semibold"
                style={{ textShadow: "0 4px 20px rgba(0, 0, 0, 1)" }}
              >
                Visit Now{" "}
                {/*goes to same admissin form as above in admission in header*/}
              </a>
            </div>
          </div>

          {/* Right Content - Specifications */}
        </div>
      </div>
    </section>
  );
}
