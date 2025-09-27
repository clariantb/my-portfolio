// src/components/AnimatedTag.tsx
"use client";
import React, { useState, useEffect } from "react"; // <-- Import useState and useEffect
import { motion } from "framer-motion";

// This is the Meteors component with the fix applied
const Meteors = ({ number }: { number?: number }) => {
  // This state will help us render only on the client
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This runs only in the browser, after the component mounts
    setIsClient(true);
  }, []);

  const meteors = new Array(number || 20).fill(true);
  
  // Render nothing on the server, and the meteors on the client
  if (!isClient) {
    return null;
  }

  return (
    <>
      {meteors.map((el, idx) => (
        <motion.span
          key={"meteor" + idx}
          className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]"
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
          }}
          animate={{
            top: "100%",
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: Math.floor(Math.random() * (10 - 2) + 2),
            repeat: Infinity,
            delay: Math.random() * (0.8 - 0.2) + 0.2,
          }}
        ></motion.span>
      ))}
    </>
  );
};

// No changes needed for the AnimatedTag component
export const AnimatedTag = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      className={
        "relative flex items-center justify-center h-full w-auto px-3 py-1.5 border border-gray-600 bg-gray-800 rounded-full overflow-hidden cursor-pointer " +
        className
      }
    >
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] rounded-full blur-3xl" />
      <div className="relative z-10 text-xs font-medium text-white">
        {children}
      </div>
      <Meteors number={10} />
    </motion.div>
  );
};