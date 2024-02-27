"use client";

import Image from "next/image";
import { motion } from "framer-motion";
export default function Home() {
  return (
    <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
      <main className="h-full flex flex-col lg:items-center lg:justify-center lg:flex-row gap-3 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5">
        <div className=" h-1/2 lg:h-[70%] lg:w-[30%] relative">
          <Image src="/images/andryariadi.png" alt="Andry Ariadi" fill className="img-hero object-contain brightness-75 contrast-90 hue-rotate-15 bg-gradient-to-r from-gray-700 to-slate-200" />
        </div>
        <div className="h-[70%] lg:h-full lg:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-8 lg:gap-5 text-black">
          <h1 className="text-3xl md:text-6xl font-bold">Crafting Digital Experiences, Disigning Tomorrow.</h1>
          <p className="md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, nihil itaque sapiente quisquam aut nisi a odit odio officiis sed impedit architecto? Quod sed eligendi quam, aspernatur praesentium itaque voluptate!
          </p>
          <div className="w-full flex gap-5">
            <button className="font-semibold p-3 md:p-4 rounded-lg ring ring-black bg-black text-white">View My Work</button>
            <button className="font-semibold p-3 md:p-4 rounded-lg ring ring-black">Contact Me</button>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
