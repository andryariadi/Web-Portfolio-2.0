"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { FaLink } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const projects = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "iBikez",
    desc: "Web-application (e-commerce) to buy the cycle you like",
    img: "/images/ibikez.png",
    linkDeploy: "https://andryariadi-ibike.vercel.app/",
    linkGithub: "https://github.com/andryariadi/iBike",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "iBlog",
    desc: "Web-application to post your blog",
    img: "/images/iblog.png",
    linkDeploy: "https://andryariadi-blog-app.vercel.app/",
    linkGithub: "https://github.com/andryariadi/blog-app",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "uDo",
    desc: "Web-application to list your activities",
    img: "/images/udo.png",
    linkDeploy: "https://andryariadi-udo.vercel.app/",
    linkGithub: "https://github.com/andryariadi/Fullstack-CRUD-Next-Js",
  },
  {
    id: 4,
    color: "from-purple-300 to-red-300",
    title: "Evently",
    desc: "Web-application to post your events and buy the events you like",
    img: "/images/evently.png",
    linkDeploy: "https://andryariadi-evently-app.vercel.app/",
    linkGithub: "https://github.com/andryariadi/event-app",
  },
  {
    id: 5,
    color: "from-red-300 to-blue-300",
    title: "CMS Dashboard",
    desc: "Web-application to manage your products and such",
    img: "/images/dashboard.png",
    linkDeploy: "https://andryariadi-cms-dashboard.vercel.app/",
    linkGithub: "https://github.com/andryariadi/CMS-Dashboard-",
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
        <div className="bg-rose-500 relative h-[600vh]" ref={ref}>
          <div className="bg-gradient-to-r from-purple-300 to-red-300 h-[calc(100vh-6rem)] flex items-center justify-center text-6xl text-white font-bold">My Projects</div>
          <div className="sticky top-0 flex items-center gap-5 h-screen overflow-hidden">
            <motion.div style={{ x }} className="bg-gray-500 flex">
              <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
              {projects.map((project) => (
                <div key={project.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}>
                  <div className="group flex flex-col gap-3 text-white">
                    <div className="relative overflow-hidden">
                      <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[620px] xl:h-[420px] group-hover:scale-110 transition-all duration-300">
                        <Image src={project.img} alt={project.title} fill />
                      </div>
                      <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center gap-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Link href={project.linkGithub} target="_blank" className="text-white hover:scale-110 bg-gradient-to-r from-red-300 to-blue-300 hover:from-blue-400 hover:to-red-400 p-2 rounded-full transition-all duration-300">
                          <FaLink size={30} />
                        </Link>

                        <Link href={project.linkDeploy} target="_blank" className="text-white hover:scale-110 bg-gradient-to-r from-red-300 to-blue-300 hover:from-blue-400 hover:to-red-400 p-2 rounded-full transition-all duration-300">
                          <IoIosRocket size={35} />
                        </Link>
                      </div>
                    </div>
                    <h1 className="font-bold text-xl md:text-3xl lg:text-4xl xl:text-6xl">{project.title}</h1>
                    <p>{project.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-red-300 to-blue-300 h-screen w-full flex flex-col items-center justify-center gap-4">
          <h1 className="text-6xl text-black mt-10">Do you have a project?</h1>
          <div className="relative">
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
