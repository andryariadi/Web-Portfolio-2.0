"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "@/libs/variants";
import Link from "next/link";
export default function Home() {
  return (
    <motion.main className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <div className="h-full flex flex-col lg:items-center lg:justify-center lg:flex-row gap-3 lg:gap-5 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5 ">
        <div className="w-full lg:w-[29%] h-full flex items-center justify-center lg:justify-start">
          <motion.div variants={fadeIn("down", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="h-[80%] lg:h-[70%] w-[80%] lg:w-full relative">
            <Image src="/images/andryariadi.png" alt="Andry Ariadi" fill className="img-hero object-contain brightness-75 contrast-90 hue-rotate-15 bg-gradient-to-r from-gray-700 to-slate-200" />
          </motion.div>
        </div>
        <div className="h-[70%] lg:h-full lg:w-[71%] flex flex-col items-center justify-center gap-3 md:gap-8 lg:gap-10 text-black">
          <motion.h1 variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="text-slate-900 text-3xl sm:text-4xl md:text-7xl lg:text-6xl 2xl:text-7xl font-bold w-full">
            Hi, I'm <span className="bg-gradient-to-r from-slate-900 to-[#739248] text-transparent bg-clip-text">Andry Ariadi</span>
          </motion.h1>
          <motion.div variants={fadeIn("up", 0.5)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="flex items-center gap-2  w-full font-semibold uppercase leading-[1]">
            <h2 className="text-slate-900 text-lg sm:text-xl md:text-4xl 2xl:text-5xl">I am a</h2>
            <TypeAnimation sequence={["Software Engineering", 2000, "Web Developer", 2000, "Frontend Developer", 2000]} speed={50} wrapper="span" repeat={Infinity} className="text-[#739248] text-lg sm:text-xl md:text-4xl 2xl:text-5xl" />
          </motion.div>
          <motion.div variants={fadeIn("up", 0.7)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="w-full flex gap-5">
            <Link href="/portfolio" className="w-fit font-semibold p-2 md:p-3 rounded-lg ring ring-slate-900 bg-slate-900 text-white">
              <button className="">View My Work</button>
            </Link>
            <Link href="/contact" className="w-fit font-semibold p-2 md:p-3 rounded-lg ring ring-slate-900 text-slate-900">
              <button className="">Contact Me</button>
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.main>
  );
}
