"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";

export function AboutSection() {
  const educationItems = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "SRM Institute of Science and Technology",
      year: "2022 - 2026",
      description: "Pursuing B.Tech in Computer Science and Engineering.",
    },
    {
      degree: "High School",
      institution: "Mount Carmel High School",
      year: "2020 - 2022",
      description: "Completed high school education with focus on science and mathematics.",
    },
  ];

  const certifications = [
    "Machine Learning Specialization - Coursera",
    "Deep Learning Specialization - DeepLearning.AI",
    "Full Stack Web Development - Udemy"
  ];

  return (
    <Section id="about">
      <SectionTitle
        title="About Me"
        subtitle="Software Developer and ML Engineer with a passion for building innovative solutions and intelligent systems."
        highlight
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto md:mx-0 overflow-hidden rounded-2xl shadow-xl">
            {/* Profile image */}
            <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-2xl flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="120"
                height="120"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-blue-500/70"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute inset-0 rounded-2xl ring-2 ring-blue-500/20 pointer-events-none" />
          </div>
          
          <motion.div
            className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-500/10 rounded-full"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div
            className="absolute -top-6 -left-6 w-24 h-24 bg-violet-500/10 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 inline-block">Professional Summary</h3>
            <p className="text-muted-foreground mb-6">
              I&apos;m a software developer and ML engineer with a focus on creating intelligent and scalable solutions. My expertise lies in developing machine learning models and full-stack applications that solve real-world problems efficiently.
            </p>
            <p className="text-muted-foreground mb-6">
              With strong foundations in Python, Machine Learning, and Web Development, I approach each project with a deep understanding of both technical requirements and business objectives. I&apos;m passionate about implementing AI solutions and creating robust applications that make a meaningful impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 inline-block">Education</h3>
            <div className="space-y-4">
              {educationItems.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="border-l-2 border-blue-500/50 pl-4 hover:border-violet-500 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <h4 className="font-bold">{item.degree}</h4>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} | {item.year}
                  </p>
                  <p className="text-sm mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600 inline-block">Certifications</h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {certifications.map((cert, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5, color: "#6366f1" }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  );
} 