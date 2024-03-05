"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const message = form.current.user_message.value.trim();
    const email = form.current.user_email.value.trim();

    if (!message || !email) {
      setError(true);
      setSuccess(false);
      return;
    }

    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, {
        publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      })
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };

  const text = "Say Hello..";
  return (
    <>
      <motion.main className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <div className="h-full flex flex-col items-center justify-center md:flex-row gap-5 lg:gap-16 xl:gap-10 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5">
          {/* Text Container */}
          <div className="h-1/2 lg:h-full w-full md:w-1/2 xl:w-[45%] 2xl:w-1/2 flex flex-col items-center justify-center">
            <div className="relative h-[75%] md:h-[70%] w-full">
              <Image src="/images/smile.svg" alt="smile" fill />
            </div>
            <div className="text-4xl md:text-5xl lg:text-6xl font-bold">
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
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-gradient-to-r from-purple-200 to-red-200 h-1/2 lg:h-full w-full md:w-1/2 xl:w-[55%] 2xl:w-1/2 rounded-xl text-xl flex flex-col justify-center gap-3 md:gap-4 xl:gap-8 2xl:gap-8 p-10 md:p-8 lg:p-10 2xl:p-16"
          >
            <span className="w-full text-base md:text-xl lg:text-2xl">Dear Andry Ariadi</span>
            <textarea name="user_message" rows="6" className="bg-transparent border-b-2 border-b-black outline-none resize-none"></textarea>
            <span className="w-full text-base md:text-xl lg:text-2xl">My email address is:</span>
            <input name="user_email" type="text" className="bg-transparent border-b-2 border-b-black outline-none" />
            <span className="w-full text-base md:text-xl lg:text-2xl">Regrads</span>
            <button className="bg-purple-400 rounded font-semibold text-gray-600 p-2 md:p-3 lg:p-4 text-base md:text-lg lg:text-xl">Send</button>
            {success && <span className="text-green-600 font-semibold text-xs md:text-base">Your message has been sent successfully!</span>}
            {error && <span className="text-rose-600 font-semibold text-xs md:text-base">Something went wrong!</span>}
          </form>
        </div>
      </motion.main>
    </>
  );
}
