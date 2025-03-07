"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { FaArrowDown } from "react-icons/fa";

export function HeroSection() {
  const titleWords = [
    { text: "Empowering", className: "font-extrabold tracking-wide" },
    { text: "Technology", className: "font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 tracking-tight" },
    { text: "Through", className: "font-medium tracking-wide text-muted-foreground" },
    { text: "Innovation", className: "font-black bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-blue-500 tracking-tight" }
  ];
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background with enhanced effects */}
      <div className="absolute inset-0 z-0">
        <svg
          className="w-full h-full opacity-10 dark:opacity-5"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--secondary))" stopOpacity="0.2" />
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(var(--uber-blue))" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <motion.circle
            cx="500"
            cy="500"
            r="200"
            fill="url(#gradient)"
            initial={{ scale: 0.8, opacity: 0.5 }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Add floating particles */}
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={200 + i * 150}
              cy={300 + i * 100}
              r="5"
              fill="hsl(var(--secondary))"
              initial={{ opacity: 0.2 }}
              animate={{
                y: [0, -50, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </svg>
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
              <div className="overflow-hidden">
                {titleWords.map((word, i) => (
                  <motion.span
                    key={i}
                    className={`inline-block ${word.className} ${i < titleWords.length - 1 ? 'mr-3 md:mr-4' : ''}`}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.2,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                  >
                    {word.text}
                  </motion.span>
                ))}
              </div>
            </h1>
          </motion.div>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-8 font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Transforming ideas into impactful solutions through innovative development.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#projects" size="lg">
                View My Projects
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button href="#contact" variant="outline" size="lg">
                Get In Touch
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 2 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        >
          <a
            href="#about"
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
            aria-label="Scroll to About section"
          >
            <FaArrowDown className="text-foreground" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
} 