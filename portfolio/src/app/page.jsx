"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
export default function Home() {
  return (
    <motion.main className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:items-center lg:justify-center lg:flex-row gap-3 lg:gap-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5 ">
        <div className="w-[29%] h-full flex items-center justify-start">
          <div className="h-1/2 lg:h-[70%] lg:w-full relative">
            <Image src="/images/andryariadi.png" alt="Andry Ariadi" fill className="img-hero object-contain brightness-75 contrast-90 hue-rotate-15 bg-gradient-to-r from-gray-700 to-slate-200" />
          </div>
        </div>
        <div className="h-[70%] lg:h-full lg:w-[71%] flex flex-col items-center justify-center gap-3 md:gap-8 lg:gap-10 text-black  ">
          <h1 className="text-slate-900 text-3xl md:text-7xl font-bold w-full">
            Hi, I'm <span className="bg-gradient-to-r from-slate-900 to-[#739248] text-transparent bg-clip-text">Andry Ariadi</span>
          </h1>
          <div className="flex items-center gap-2  w-full text-[45px] font-semibold uppercase leading-[1]">
            <h2 className="text-slate-900">I am a</h2>
            <TypeAnimation sequence={["Software Engineering", 2000, "Web Developer", 2000, "Frontend Developer", 2000]} speed={50} wrapper="span" repeat={Infinity} className="text-[#739248]" />
          </div>
          <div className="w-full flex gap-5">
            <button className="font-semibold p-3 md:p-4 rounded-lg ring ring-black bg-black text-white">View My Work</button>
            <button className="font-semibold p-3 md:p-4 rounded-lg ring ring-black">Contact Me</button>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
