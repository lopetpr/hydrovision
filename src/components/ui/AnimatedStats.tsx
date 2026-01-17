import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useInView,
} from "framer-motion";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
}

interface AnimatedStatsProps {
  stats: StatItem[];
}

function AnimatedStatCard({
  value,
  suffix = "",
  label,
  delay = 0,
}: StatItem & { delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 20,
    stiffness: 50,
    mass: 1,
  });

  const rounded = useTransform(springValue, (latest) =>
    Number(latest.toFixed(value % 1 === 0 ? 0 : 1))
  );

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (isInView) {
      motionValue.set(0);
      timeout = setTimeout(() => {
        motionValue.set(value);
      }, delay * 100);
    }
    return () => clearTimeout(timeout);
  }, [isInView, value, motionValue, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20 hover:bg-white/15 transition"
    >
      <div className="text-4xl md:text-5xl font-bold text-cyan-300 mb-2">
        {displayValue}
        {suffix}
      </div>
      <p className="text-sm md:text-base text-gray-200">{label}</p>
    </motion.div>
  );
}

export default function AnimatedStats({ stats }: AnimatedStatsProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
      {stats.map((stat, index) => (
        <AnimatedStatCard key={index} {...stat} delay={index} />
      ))}
    </div>
  );
}
