"use client";
import Link from "next/link";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import NavLink from "./NavLink";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

const links = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathName = usePathname();

  const topVariants = {
    closed: {
      rotete: 0,
    },
    opened: {
      rotate: 45,
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotete: 0,
    },
    opened: {
      rotate: -45,
    },
  };

  const listVariants = {
    closed: {
      x: "100vw",
    },
    opened: {
      x: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <nav className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Nav Links */}
        <div className="hidden md:flex items-center justify-center gap-5 xl:w-[36%] font-aldrich">
          {links.map((link) => (
            <NavLink key={link.title} link={link} />
          ))}
        </div>
        {/* Logo */}
        <div className="md:hidden lg:flex items-center xl:justify-center xl:w-[36%]">
          <Link href="/" className="flex items-center justify-center gap-1 text-sm font-semibold font-aldrich bg-black rounded-md p-1">
            <span className="text-white">Andry</span>
            <span className="bg-white flex items-center justify-center w-12 h-8 rounded text-black">Ariadi</span>
          </Link>
        </div>
        {/* Social Icons */}
        <div className="hidden md:flex items-center justify-center gap-5 xl:w-[36%] text-black">
          <Link href="https://www.linkedin.com/in/andry-ariadi/" className="hover:scale-125 transition-all duration-300">
            <FaLinkedin size={25} />
          </Link>
          <Link href="https://github.com/andryariadi" className="hover:scale-125 transition-all duration-300">
            <BsGithub size={25} />
          </Link>
          <Link href="https://www.instagram.com/andry_ariadi/?hl=id" className="hover:scale-125 transition-all duration-300">
            <RiInstagramFill size={25} />
          </Link>
        </div>
        {/* Menu Bar */}
        <div className="md:hidden">
          {/* Menu Btn */}
          <button className="flex flex-col items-center justify-between w-10 h-8 z-50 relative" onClick={() => setOpen(!open)}>
            <motion.div variants={topVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
            <motion.div variants={centerVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded"></motion.div>
            <motion.div variants={bottomVariants} animate={open ? "opened" : "closed"} className="w-10 h-1 bg-black rounded origin-left"></motion.div>
          </button>
          {/* <label className="btn btn-circle swap swap-rotate z-50 relative">
            <input type="checkbox" onClick={() => setOpen(!open)} />
            <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
            <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512">
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          </label> */}
          {/* Menu List */}
          {open && (
            <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute z-10 bg-gradient-to-b from-amber-100 to-slate-200 top-0 left-0 w-screen h-screen flex flex-col items-center justify-center gap-8">
              {links.map((link) => (
                <motion.div variants={listItemVariants} key={link.title}>
                  <Link href={link.url} className={`nav-link font-aldrich text-xl text-black font-semibold px-3 rounded-md ${pathName === link.url && "bg-black text-white"}`}>
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </nav>
    </>
  );
}
