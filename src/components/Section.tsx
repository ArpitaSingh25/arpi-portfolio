"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  fullHeight?: boolean;
  delay?: number;
  staggerChildren?: boolean;
}

export function Section({ 
  id, 
  className = "", 
  children, 
  fullHeight = false,
  delay = 0,
  staggerChildren = false
}: SectionProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
    rootMargin: "-50px 0px",
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1], // Custom cubic bezier for smooth feel
        delay: delay,
        staggerChildren: staggerChildren ? 0.2 : 0,
      }
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }
    },
  };

  return (
    <section
      id={id}
      className={`section ${fullHeight ? "min-h-screen" : ""} ${className}`}
      ref={ref}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container"
      >
        {staggerChildren ? (
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        ) : (
          children
        )}
      </motion.div>
    </section>
  );
} 