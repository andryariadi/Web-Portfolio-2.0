"use client";

import { motion } from "framer-motion";

export default function PortfolioPage() {
  return (
    <>
      <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
        <main className="h-full flex flex-col lg:items-center lg:justify-center lg:flex-row gap-3 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 py-5">
          <div>Portfolio Page</div>
        </main>
      </motion.div>
    </>
  );
}
