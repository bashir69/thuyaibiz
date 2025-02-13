"use client"
import { motion } from "framer-motion";
import { useState } from "react";

const cards = [
  "Card 1", "Card 2", "Card 3", "Card 4", "Card 5", "Card 6"
];

export default function Project() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative w-full overflow-hidden  p-4">
      <motion.div
        className="flex w-max"
        animate={isPaused ? {} : { x: ["0%", "-20%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {[...cards, ...cards, ...cards].map((card, index) => (
          <div 
            key={index} 
            className="w-40 h-24 mx-2 bg-blue-500 text-white flex items-center justify-center text-lg font-bold rounded-xl shadow-lg"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {card}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
