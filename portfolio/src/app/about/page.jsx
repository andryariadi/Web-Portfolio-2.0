"use client";

import { motion } from "framer-motion";

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
  return (
    <>
      <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <main className="bg-amber-500">
          {/* Text Container */}
          <div className="bg-rose-500 p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
            {/* Bio Container */}
            <div className="bg-violet-500 flex flex-col justify-center gap-10 text-black">
              <h1 className="font-bold text-2xl">Biography</h1>
              {/* Description */}
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minus facilis quis nesciunt dolor! Natus sit perferendis modi corporis cupiditate maiores similique, consequatur eligendi repellendus nemo debitis, quam repellat
                quae! Nulla animi ullam soluta accusantium dolore? Assumenda blanditiis dignissimos nihil commodi harum eligendi illo doloremque distinctio, odit quia. Iusto officia obcaecati neque delectus quas. Excepturi quisquam natus
                corrupti fugiat nobis?
              </p>
              <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
              {/* SVG Scroll */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50}>
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </svg>
            </div>
            {/* Skill Container */}
            <div className="bg-sky-500 flex flex-col justify-center gap-10 text-black">
              <h1 className="font-bold text-2xl">Skills</h1>
              {/* Skill Lists */}
              <div className="flex gap-5 flex-wrap">
                {skills.map((skill) => (
                  <div key={skill.id} className="p-2 rounded text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black transition-all duration-300">
                    {skill.name}
                  </div>
                ))}
              </div>
              {/* SVG Scroll */}
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50}>
                <path
                  d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                  stroke="#000000"
                  strokeWidth="1"
                ></path>
                <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1"></path>
              </svg>
            </div>
            {/* Project Container */}
            <div className="bg-fuchsia-500 flex flex-col justify-center gap-10 text-black">
              <h1 className="font-bold text-2xl">Projects</h1>
              {/* Project Lists */}
              <div>
                {/* Project list item */}
                <div className="flex justify-between h-48">
                  {/* Left */}
                  <div className="w-1/3 bg-teal-500">
                    <h6 className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">iBikez</h6>
                    <p className="p-3 text-sm italic">Web-application (e-commerce) to buy the cycle you like</p>
                    <span className="p-3 text-rose-500 font-semibold text-sm">February 2024</span>
                  </div>
                  {/* Center */}
                  <div className="w-1/6 bg-rose-500">
                    {/* Line */}
                    <div className="relative w-1 h-full bg-gray-600 rounded">
                      {/* Line Circle */}
                      <div className="absolute h-5 w-5 rounded-full bg-white ring-4 ring-rose-500 -left-2"></div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3 bg-emerald-500">Right</div>
                </div>
                {/* Project list item */}
                <div className="flex justify-between h-48">
                  {/* Left */}
                  <div className="w-1/3">Left</div>
                  {/* Center */}
                  <div className="w-1/6">
                    {/* Line */}
                    <div>
                      {/* Line Circle */}
                      <div>Circle</div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3">
                    <h6>iBlog</h6>
                    <p>Web-application to post your blog</p>
                    <span>February 2024</span>
                  </div>
                </div>
                {/* Project list item */}
                <div className="flex justify-between h-48">
                  {/* Left */}
                  <div className="w-1/3">
                    <h6>uDo</h6>
                    <p>Web-application to list your activities</p>
                    <span>February 2024</span>
                  </div>
                  {/* Center */}
                  <div className="w-1/6">
                    {/* Line */}
                    <div>
                      {/* Line Circle */}
                      <div>Circle</div>
                    </div>
                  </div>
                  {/* Right */}
                  <div className="w-1/3">Right</div>
                </div>
              </div>
            </div>
          </div>
          {/* SVG Container */}
          <div className="bg-teal-500 hidden">Andry</div>
        </main>
      </motion.div>
    </>
  );
}
