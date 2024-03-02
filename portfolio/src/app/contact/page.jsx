"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Say Hello..";
  return (
    <>
      <motion.main className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <div className="h-full flex flex-col lg:items-center lg:justify-center lg:flex-row gap-3 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5">
          {/* Text Container */}
          <div className="h-1/2 lg:h-full lg-w-1/2 flex flex-col items-center justify-center">
            <div className="relative h-[45%] w-full">
              <Image src="/images/smile.svg" alt="smile" fill />
            </div>
            <div className="text-6xl font-bold">
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.1 }}
                  className="bg-gradient-to-r from-[#C290FF] to-rose-300 text-transparent bg-clip-text mr-[5px]"
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
          {/* Form Container */}
          <form className="bg-gradient-to-r from-purple-200 to-red-200 h-1/2 lg:h-full lg-w-1/2 rounded-xl text-xl flex flex-col justify-center gap-5 p-24">
            <span>Dear Andry Ariadi</span>
            <textarea cols="30" rows="6" className="bg-transparent border-b-2 border-b-black outline-none resize-none"></textarea>
            <span>My email address is:</span>
            <input type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
            <span>Regrads</span>
            <button className="bg-purple-400 rounded font-semibold text-gray-600 p-4">Send</button>
            {success && <span className="text-green-600 font-semibold">Your message has been sent successfully!</span>}
            {error && <span className="text-rose-600 font-semibold">Something went wrong!</span>}
          </form>
        </div>
      </motion.main>
    </>
  );
}
