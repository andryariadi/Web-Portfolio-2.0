"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "iBikez",
    desc: "Web-application (e-commerce) to buy the cycle you like",
    img: "/images/ibikez.png",
    link: "https://andryariadi-ibike.vercel.app/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "iBlog",
    desc: "Web-application to post your blog",
    img: "/images/iblog.png",
    link: "https://andryariadi-blog-app.vercel.app/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "uDo",
    desc: "Web-application to list your activities",
    img: "/images/udo.png",
    link: "https://andryariadi-udo.vercel.app/",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Evently",
    desc: "Web-application to post your events and buy the events you like",
    img: "/images/evently.png",
    link: "https://andryariadi-evently-app.vercel.app/",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "CMS Dashboard",
    desc: "Web-application to manage your products and such",
    img: "/images/dashboard.png",
    link: "https://andryariadi-cms-dashboard.vercel.app/",
  },
];

export default function PortfolioPage() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-83.5%"]);

  console.log(x, "<-----diportfoliopage");

  return (
    <>
      <motion.main className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <div className="bg-rose-500 relative h-[600vh] text-black" ref={ref}>
          <div className="bg-teal-500 h-[calc(100vh-6rem)] flex items-center justify-center text-6xl">My Works</div>
          <div className="bg-amber-500 sticky top-0 flex items-center gap-5 h-screen overflow-hidden">
            <motion.div style={{ x }} className="bg-gray-500 flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {projects.map((project) => (
                <div key={project.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}>
                  <div className="bg-teal-500 flex flex-col gap-5 text-white">
                    <h1>{project.title}</h1>
                    <div className="relative">
                      <Image src={project.img} alt={project.title} fill />
                    </div>
                    <p>{project.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="bg-violet-500 h-screen w-full flex flex-col items-center justify-center gap-5">
          <h1 className="text-6xl text-black">Do you have a project?</h1>
          <div className="bg-amber-500 relative">
            <motion.svg animate={{ rotate: 360 }} transition={{ duration: 55, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px] ">
              <defs>
                <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-[19.5px] leading-1">
                  Frontend Developer and Web Developer
                </textPath>
              </text>
            </motion.svg>
            <Link href="/contact" className="absolute top-0 left-0 right-0 bottom-0 m-auto w-16 h-1/6 md:w-28 md:h-28 bg-black text-white rounded-full flex items-center justify-center">
              Hire Me
            </Link>
          </div>
        </div>
      </motion.main>
    </>
  );
}
