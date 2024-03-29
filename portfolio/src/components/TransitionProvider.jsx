"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

export default function TransitionProvider({ children }) {
  const pathName = usePathname();

  return (
    <>
      <AnimatePresence mode="wait">
        <div key={pathName} className="w-full h-screen bg-gradient-to-b from-amber-50 to-slate-200">
          {/* motion top */}
          <motion.div className="h-screen w-screen fixed rounded-b-[100px] bg-black z-40" animate={{ height: "0vh" }} exit={{ height: "130vh" }} transition={{ duration: 0.5, ease: "easeOut" }} />
          {/* motion center */}
          <motion.div
            className="fixed m-auto top-0 bottom-0 left-0 right-0 text-white font-aldrich text-6xl cursor-default  z-50 w-fit h-fit bg-gradient-to-r from-amber-50 to-slate-200 text-transparent bg-clip-text"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {pathName === "/" ? "home" : pathName.substring(1)}
          </motion.div>
          {/* motion bottom */}
          <motion.div className="h-screen w-screen fixed rounded-t-[100px] bottom-0 bg-black z-30" initial={{ height: "130vh" }} animate={{ height: "0vh", transition: { delay: 0.5 } }} />
          <div className="h-24">
            <Navbar />
          </div>
          <div className="h-[calc(100dvh-6rem)]">{children}</div>
        </div>
      </AnimatePresence>
    </>
  );
}
