"use client";

import { type FC, useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface StatItemProps {
  number: number;
  suffix: string;
  description: string;
  duration?: number;
}

const AnimatedStatItem: FC<StatItemProps> = ({
  number,
  suffix,
  description,
  duration = 2000,
}) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const countRef = useRef(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }

      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smoother animation
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);

      const currentCount = Math.floor(easedProgress * number);

      if (currentCount !== countRef.current) {
        countRef.current = currentCount;
        setCount(currentCount);
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(number);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [inView, number, duration]);

  return (
    // <div ref={ref} className="flex flex-col items-center md:items-start">
    //   <div className="text-green-800 text-6xl md:text-7xl font-bold relative">
    //     {count}
    //     {suffix}
    //     {/* <div className="absolute -bottom-3 left-0 w-full max-w-[100px] h-1 bg-blue-500"></div> */}
    //   </div>
    //   <p className="text-gray-500 text-xl md:text-2xl mt-3">{description}</p>
    // </div>
    <div ref={ref} className="flex flex-col items-center md:items-start">
      <div
        className="text-green-800 font-bold relative"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
      >
        {count}
        {suffix}
      </div>
      <p
        className="text-gray-500 mt-3"
        style={{ fontSize: "clamp(1rem, 2.5vw, 2rem)" }}
      >
        {description}
      </p>
    </div>
  );
};

export default function AnimatedStatsSection() {
  const stats = [
    { number: 455, suffix: "+", description: "Complete landscape projects" },
    { number: 600, suffix: "+", description: "Satisfied customers" },
    { number: 7, suffix: "+", description: "Residential areas served" },
  ];

  return (
    // <section className="py-16  relative">
    //   <div className="container mx-auto px-4">
    //     <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
    //       {stats.map((stat, index) => (
    //         <AnimatedStatItem
    //           key={index}
    //           number={stat.number}
    //           suffix={stat.suffix}
    //           description={stat.description}
    //           duration={2000 + index * 500} // Stagger the animations
    //         />
    //       ))}
    //     </div>
    //   </div>
    // </section>
    <section className="py-8 md:py-16 relative overflow-x-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-nowrap gap-4 md:gap-12">
          {stats.map((stat, index) => (
            <AnimatedStatItem
              key={index}
              number={stat.number}
              suffix={stat.suffix}
              description={stat.description}
              duration={2000 + index * 500} // Stagger the animations
            />
          ))}
        </div>
      </div>
    </section>
  );
}
