"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function StackedCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <div ref={ref} className="sticky top-24 h-screen flex justify-center">
      <motion.div
        style={{ scale, opacity }}
        className="
          w-[75%] h-[65%]
          bg-white
          rounded-3xl
          shadow-2xl
          p-10
        "
      >
        {children}
      </motion.div>
    </div>
  );
}
