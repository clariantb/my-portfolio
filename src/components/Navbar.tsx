"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 max-w-2xl mx-auto z-50 mt-6"
    >
      <div className="flex items-center justify-center space-x-4 text-sm font-medium text-gray-300 bg-black/[.3] backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3">
        <Link href="/#projects" className="hover:text-white transition-colors">
          Projects
        </Link>
        <Link href="/#about" className="hover:text-white transition-colors">
          About
        </Link>
        <a href="/clariant-resume.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          Resume
        </a>
      </div>
    </motion.nav>
  );
};

export default Navbar;