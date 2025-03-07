"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  highlight?: boolean;
}

export function SectionTitle({
  title,
  subtitle,
  centered = false,
  className = "",
  highlight = false,
}: SectionTitleProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  // Split title into words for individual animation
  const titleWords = title.split(" ");

  return (
    <motion.div
      className={`mb-12 ${centered ? "text-center" : ""} ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="section-title relative inline-block text-3xl md:text-4xl font-bold">
        <div className="overflow-hidden">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              className={`inline-block mr-2 ${
                highlight && i === titleWords.length - 1
                  ? "bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600"
                  : ""
              }`}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.1,
                  },
                },
              }}
            >
              {word}
            </motion.span>
          ))}
        </div>
        <motion.span
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-500 to-violet-600"
          initial={{ width: 0 }}
          whileInView={{ width: centered ? 80 : 48 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          style={{ left: centered ? "calc(50% - 40px)" : "0" }}
        />
      </h2>
      {subtitle && (
        <motion.p
          className="text-muted-foreground mt-4 max-w-2xl"
          variants={itemVariants}
          style={{ marginLeft: centered ? "auto" : "0", marginRight: centered ? "auto" : "0" }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
} 