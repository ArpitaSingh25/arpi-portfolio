"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaKaggle, FaMedium } from "react-icons/fa";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/",
      icon: FaLinkedin,
    },
    {
      name: "GitHub",
      href: "https://github.com/",
      icon: FaGithub,
    },
    {
      name: "Kaggle",
      href: "https://kaggle.com/",
      icon: FaKaggle,
    },
    {
      name: "Medium",
      href: "https://medium.com/@",
      icon: FaMedium,
    },
  ];

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <Link href="/" className="text-2xl font-bold tracking-tight flex items-center">
              <span className="text-foreground">Arpita Singh</span>
            </Link>
            <p className="text-muted-foreground mt-2 text-sm">
              Software Developer specializing in DevOps and Full-Stack Development.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <div className="flex space-x-4 mb-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted"
                  aria-label={link.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -3 }}
                >
                  <link.icon size={20} />
                </motion.a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm">
              &copy; {currentYear} Arpita Singh. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
} 