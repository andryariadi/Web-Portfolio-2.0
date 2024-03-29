"use client";

import BrainSvg from "@/components/BrainSvg";
import { fadeIn } from "@/libs/variants";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

const skills = [
  {
    id: 1,
    name: "JavaScript",
  },
  {
    id: 2,
    name: "TypeScript",
  },
  {
    id: 3,
    name: "React Js",
  },
  {
    id: 4,
    name: "Next Js",
  },
  {
    id: 5,
    name: "Next Auth",
  },
  {
    id: 6,
    name: "React Native",
  },
  {
    id: 7,
    name: "React-Redux",
  },
  {
    id: 8,
    name: "Redux Toolkit",
  },
  {
    id: 9,
    name: "Apollo Client",
  },
  {
    id: 10,
    name: "HTML",
  },
  {
    id: 11,
    name: "CSS",
  },
  {
    id: 12,
    name: "Tailwind",
  },
  {
    id: 13,
    name: "Bootstrap",
  },
  {
    id: 14,
    name: "Node JS",
  },
  {
    id: 15,
    name: "Express Js",
  },
  {
    id: 16,
    name: "MongoDB",
  },
  {
    id: 17,
    name: "Mongoose",
  },
  {
    id: 18,
    name: "PostgreSQL",
  },
  {
    id: 19,
    name: "Sequelize",
  },
];

export default function AboutPage() {
  const containerRef = useRef();
  const skillRef = useRef();
  const projectRef = useRef();
  const projectListItemRef1 = useRef();
  const projectListItemRef2 = useRef();
  const projectListItemRef3 = useRef();
  const projectListItemRef4 = useRef();
  const projectListItemRef5 = useRef();

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  const isSkillRefInView = useInView(skillRef, { margin: "-100px", once: true });
  const isProjectRefInView = useInView(projectRef, { margin: "-100px", once: true });
  const isProjectListItemInView1 = useInView(projectListItemRef1, { margin: "-100px", once: true });
  const isProjectListItemInView2 = useInView(projectListItemRef2, { margin: "-100px", once: true });
  const isProjectListItemInView3 = useInView(projectListItemRef3, { margin: "-100px", once: true });
  const isProjectListItemInView4 = useInView(projectListItemRef4, { margin: "-100px", once: true });
  const isProjectListItemInView5 = useInView(projectListItemRef5, { margin: "-100px", once: true });

  return (
    <>
      <motion.main className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <div className="about-scroll h-full overflow-y-scroll lg:flex" ref={containerRef}>
          {/* Text Container */}
          <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-20 lg:pr-0 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-60 lg:w-2/3 xl:w-1/2">
            {/* Bio Container */}
            <div className="flex flex-col justify-center gap-10 text-black">
              {/* Title  */}
              <motion.h1 variants={fadeIn("right", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="font-aldrich font-bold text-[#739248] text-2xl md:text-4xl">
                Biography
              </motion.h1>
              {/* Description */}
              <motion.p variants={fadeIn("right", 0.4)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="font-rajdhani text-lg md:text-xl font-semibold text-justify">
                I graduated from the Bachelor of Mechanical Engineering program at Malang State University. I previously worked as a HSE and now I am transitioning to a career in the IT field as a Software Developer. Following the
                completion of the Fullstack Javascript bootcamp, I have acquired the abilities and skills required to develop web and mobile applications.
              </motion.p>
              {/* Count Project */}
              <div className="flex items-center gap-x-5">
                <div className="h-full flex flex-col items-start justify-center">
                  <div>
                    <CountUp start={0} end={11} duration={8} className="font-aldrich font-bold text-4xl md:text-5xl lg:text-4xl text-[#739248]" />
                  </div>
                  <div>
                    <p className="font-aldrich font-semibold text-xs md:text-lg lg:text-base text-[#739248]">
                      Projects <br /> Complated
                    </p>
                  </div>
                </div>
                <div className="h-full flex flex-col items-start justify-center">
                  <div>
                    <CountUp start={0} end={13} duration={8} className="font-aldrich font-bold text-4xl md:text-5xl lg:text-4xl text-[#739248]" />
                  </div>
                  <div>
                    <p className="font-aldrich font-semibold text-xs md:text-lg lg:text-base text-[#739248]">
                      Software Engineering <br /> Certificate
                    </p>
                  </div>
                </div>
              </div>
              {/* Quote */}
              <motion.blockquote variants={fadeIn("right", 0.6)} initial="hidden" whileInView={"show"} viewport={{ once: true, amount: 0.7 }} className="font-rajdhani font-medium italic md:text-xl lg:text-lg xl:text-base">
                From mechanics to code, bridging the gap between engineering and software. Evolution is the key, innovation is the goal.
              </motion.blockquote>
              {/* SVG Scroll */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </div>
            {/* Skill Container */}
            <div className="flex flex-col justify-center gap-10 text-black" ref={skillRef}>
              <motion.h1 initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-aldrich font-bold text-[#739248] text-2xl md:text-4xl">
                Skills
              </motion.h1>
              {/* Skill Lists */}
              <motion.div initial={{ x: "-300px" }} animate={isSkillRefInView ? { x: 0 } : {}} transition={{ delay: 0.3 }} className="flex gap-5 flex-wrap">
                {skills.map((skill) => (
                  <div key={skill.id} className="font-rajdhani font-medium p-2 rounded text-sm md:text-lg lg:text-base cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
                    {skill.name}
                  </div>
                ))}
              </motion.div>
              {/* SVG Scroll */}
              <motion.svg
                initial={{ opacity: 0.2, y: 0 }}
                animate={{ opacity: 1, y: "10px" }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width={50}
                height={50}
              >
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </motion.svg>
            </div>
            {/* Project Container */}
            <div className="flex flex-col justify-center gap-10 text-black pb-10" ref={projectRef}>
              <motion.h1 initial={{ y: "300px" }} animate={isProjectRefInView ? { y: 0 } : {}} transition={{ delay: 0.2 }} className="font-aldrich font-bold text-[#739248] text-2xl md:text-4xl">
                Projects
              </motion.h1>
              {/* Project Lists */}
              <div className="">
                {/* Project list item */}
                <div ref={projectListItemRef1} className="flex gap-5 h-48">
                  {/* Left */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView1 ? { y: 0 } : {}} transition={{ delay: 0.3 }} className="w-1/3 ">
                    <h6 className="bg-gradient-to-r from-purple-200 to-red-200 p-3 md:p-4 font-semibold rounded-b-lg rounded-s-lg text-sm md:text-2xl lg:text-xl 2xl:text-lg font-aldrich text-slate-900">iBikez</h6>
                    <p className="p-3 text-xs sm:text-base md:text-xl lg:text-lg 2xl:text-sm italic font-rajdhani font-medium">Web-application (e-commerce) to buy the cycle you like</p>
                    <span className="p-3 text-rose-500 font-semibold text-[11px] sm:text-xs md:text-xl lg:text-lg xl:text-base 2xl:text-sm font-aldrich">February 2024</span>
                  </motion.div>
                  {/* Center */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView1 ? { y: 0 } : {}} transition={{ delay: 0.3 }} className="w-[10%] flex items-center justify-center">
                    {/* Line */}
                    <div className="relative w-1 h-full bg-gray-600 rounded">
                      {/* Line Circle */}
                      <div className="absolute h-5 w-5 rounded-full bg-gradient-to-r from-purple-200 to-red-200 ring-4 ring-rose-500 -left-2"></div>
                    </div>
                  </motion.div>
                  {/* Right */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView1 ? { y: 0 } : {}} transition={{ delay: 0.3 }} className="w-1/3"></motion.div>
                </div>
                {/* Project list item */}
                <div ref={projectListItemRef2} className="flex gap-5 h-48">
                  {/* Left */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView2 ? { y: 0 } : {}} transition={{ delay: 0.4 }} className="w-1/3 "></motion.div>
                  {/* Center */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView2 ? { y: 0 } : {}} transition={{ delay: 0.4 }} className="w-[10%] flex items-center justify-center">
                    {/* Line */}
                    <div className="relative w-1 h-full bg-gray-600 rounded">
                      {/* Line Circle */}
                      <div className="absolute h-5 w-5 rounded-full bg-gradient-to-r from-purple-200 to-red-200 ring-4 ring-rose-500 -left-2"></div>
                    </div>
                  </motion.div>
                  {/* Right */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView2 ? { y: 0 } : {}} transition={{ delay: 0.4 }} className="w-1/3">
                    <h6 className="bg-gradient-to-r from-purple-200 to-red-200 p-3 md:p-4 font-semibold rounded-b-lg rounded-s-lg text-sm md:text-2xl lg:text-xl 2xl:text-lg font-aldrich text-slate-900">iBlog</h6>
                    <p className="p-3 text-xs sm:text-base md:text-xl lg:text-lg 2xl:text-sm italic font-rajdhani font-medium">Web-application to post your blog</p>
                    <span className="p-3 text-rose-500 font-semibold text-[10px] sm:text-xs md:text-xl lg:text-lg xl:text-base 2xl:text-sm font-aldrich">February 2024</span>
                  </motion.div>
                </div>
                {/* Project list item */}
                <div ref={projectListItemRef3} className="flex gap-5 h-48">
                  {/* Left */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView3 ? { y: 0 } : {}} transition={{ delay: 0.5 }} className="w-1/3 ">
                    <h6 className="bg-gradient-to-r from-purple-200 to-red-200 p-3 md:p-4 font-semibold rounded-b-lg rounded-s-lg text-sm md:text-2xl lg:text-xl 2xl:text-lg font-aldrich text-slate-900">uDo</h6>
                    <p className="p-3 text-xs sm:text-base md:text-xl lg:text-lg 2xl:text-sm italic font-rajdhani font-medium">Web-application to list your activities</p>
                    <span className="p-3 text-rose-500 font-semibold text-[10px] sm:text-xs md:text-xl lg:text-lg xl:text-base 2xl:text-sm font-aldrich">February 2024</span>
                  </motion.div>
                  {/* Center */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView3 ? { y: 0 } : {}} transition={{ delay: 0.5 }} className="w-[10%] flex items-center justify-center">
                    {/* Line */}
                    <div className="relative w-1 h-full bg-gray-600 rounded">
                      {/* Line Circle */}
                      <div className="absolute h-5 w-5 rounded-full bg-gradient-to-r from-purple-200 to-red-200 ring-4 ring-rose-500 -left-2"></div>
                    </div>
                  </motion.div>
                  {/* Right */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView3 ? { y: 0 } : {}} transition={{ delay: 0.5 }} className="w-1/3"></motion.div>
                </div>
                {/* Project list item */}
                <div ref={projectListItemRef4} className="flex gap-5 h-48">
                  {/* Left */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView4 ? { y: 0 } : {}} transition={{ delay: 0.6 }} className="w-1/3 "></motion.div>
                  {/* Center */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView4 ? { y: 0 } : {}} transition={{ delay: 0.6 }} className="w-[10%] flex items-center justify-center">
                    {/* Line */}
                    <div className="relative w-1 h-full bg-gray-600 rounded">
                      {/* Line Circle */}
                      <div className="absolute h-5 w-5 rounded-full bg-gradient-to-r from-purple-200 to-red-200 ring-4 ring-rose-500 -left-2"></div>
                    </div>
                  </motion.div>
                  {/* Right */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView4 ? { y: 0 } : {}} transition={{ delay: 0.6 }} className="w-1/3">
                    <h6 className="bg-gradient-to-r from-purple-200 to-red-200 p-3 md:p-4 font-semibold rounded-b-lg rounded-s-lg text-sm md:text-2xl lg:text-xl 2xl:text-lg font-aldrich text-slate-900">Evently</h6>
                    <p className="p-3 text-xs sm:text-base md:text-xl lg:text-lg 2xl:text-sm italic font-rajdhani font-medium">Web-application to post your events and buy the events you like</p>
                    <span className="p-3 text-rose-500 font-semibold text-[10px] sm:text-xs md:text-xl lg:text-lg xl:text-base 2xl:text-sm font-aldrich">January 2024</span>
                  </motion.div>
                </div>
                {/* Project list item */}
                <div ref={projectListItemRef5} className="flex gap-5 h-48">
                  {/* Left */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView5 ? { y: 0 } : {}} transition={{ delay: 0.8 }} className="w-1/3 ">
                    <h6 className="bg-gradient-to-r from-purple-200 to-red-200 p-3 md:p-4 font-semibold rounded-b-lg rounded-s-lg text-sm md:text-2xl lg:text-xl 2xl:text-lg font-aldrich text-slate-900">CMS-Dashboard</h6>
                    <p className="p-3 text-xs sm:text-base md:text-xl lg:text-lg 2xl:text-sm italic font-rajdhani font-medium">Web-application CMS dashboard</p>
                    <span className="p-3 text-rose-500 font-semibold text-[10px] sm:text-xs md:text-xl lg:text-lg xl:text-base 2xl:text-sm font-aldrich">December 2023</span>
                  </motion.div>
                  {/* Center */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView5 ? { y: 0 } : {}} transition={{ delay: 0.8 }} className="w-[10%] flex items-center justify-center">
                    {/* Line */}
                    <div className="relative w-1 h-full bg-gray-600 rounded">
                      {/* Line Circle */}
                      <div className="absolute h-5 w-5 rounded-full bg-gradient-to-r from-purple-200 to-red-200 ring-4 ring-rose-500 -left-2"></div>
                    </div>
                  </motion.div>
                  {/* Right */}
                  <motion.div initial={{ y: "300px" }} animate={isProjectListItemInView5 ? { y: 0 } : {}} transition={{ delay: 0.8 }} className="w-1/3"></motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* SVG Container */}
          <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0 z-30">
            <BrainSvg scrollYProgress={scrollYProgress} />
          </div>
        </div>
      </motion.main>
    </>
  );
}
