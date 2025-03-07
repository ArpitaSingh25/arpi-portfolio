"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { 
  FaDatabase,
  FaTools,
  FaUsers,
  FaBrain,
  FaNodeJs,
  FaReact,
  FaPython
} from "react-icons/fa";
import { 
  SiJavascript,
  SiNextdotjs,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiPandas,
  SiNumpy,
  SiOpencv,
  SiJupyter
} from "react-icons/si";

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "TensorFlow", icon: SiTensorflow, proficiency: 90 },
        { name: "PyTorch", icon: SiPytorch, proficiency: 85 },
        { name: "Scikit-learn", icon: SiScikitlearn, proficiency: 88 },
        { name: "OpenCV", icon: SiOpencv, proficiency: 85 },
      ],
    },
    {
      title: "Data Science Tools",
      skills: [
        { name: "Python", icon: FaPython, proficiency: 95 },
        { name: "Pandas", icon: SiPandas, proficiency: 90 },
        { name: "NumPy", icon: SiNumpy, proficiency: 88 },
        { name: "Jupyter", icon: SiJupyter, proficiency: 92 },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "JavaScript", icon: SiJavascript, proficiency: 90 },
        { name: "React.js", icon: FaReact, proficiency: 88 },
        { name: "Node.js", icon: FaNodeJs, proficiency: 85 },
        { name: "Next.js", icon: SiNextdotjs, proficiency: 82 },
      ],
    },
    {
      title: "Professional Skills",
      skills: [
        { name: "Problem Solving", icon: FaBrain, proficiency: 95 },
        { name: "Data Analysis", icon: FaDatabase, proficiency: 90 },
        { name: "Research", icon: FaTools, proficiency: 88 },
        { name: "Team Leadership", icon: FaUsers, proficiency: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Card hover animation variants
  const cardHoverVariants = {
    initial: { 
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
      y: 0
    },
    hover: { 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  // Skill item hover animation variants
  const skillItemVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  // Progress bar hover animation variants
  const progressBarVariants = {
    initial: { 
      filter: "brightness(1)"
    },
    hover: { 
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <Section id="skills" className="bg-muted/30">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="My expertise in machine learning, data science, and full-stack development."
        centered
        highlight
      />

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {skillCategories.map((category, categoryIndex) => (
          <motion.div
            key={categoryIndex}
            className="bg-card rounded-xl p-6 shadow-sm border border-transparent"
            variants={itemVariants}
            initial="initial"
            whileHover="hover"
            animate="initial"
            custom={cardHoverVariants}
          >
            <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600">{category.title}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="space-y-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                  whileHover="hover"
                  variants={skillItemVariants}
                >
                  <div className="flex items-center justify-between">
                    <motion.div 
                      className="flex items-center"
                      whileHover={{ 
                        x: 3,
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      <motion.div
                        whileHover={{ 
                          rotate: 10,
                          scale: 1.2,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                      >
                        <skill.icon className="mr-2 text-secondary" size={18} />
                      </motion.div>
                      <span>{skill.name}</span>
                    </motion.div>
                    <motion.span 
                      className="text-sm text-muted-foreground font-medium"
                      whileHover={{ 
                        scale: 1.1,
                        color: "#6366f1",
                        transition: { type: "spring", stiffness: 400 }
                      }}
                    >
                      {skill.proficiency}%
                    </motion.span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-blue-500 to-violet-600 h-2 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      variants={progressBarVariants}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-16 bg-card rounded-xl p-6 shadow-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        whileHover={{
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          y: -5,
          transition: {
            type: "spring",
            stiffness: 200,
            damping: 25
          }
        }}
      >
        <h3 className="text-xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-violet-600">Development Philosophy</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Data-Driven Solutions",
              description:
                "I leverage machine learning and data analysis to build intelligent solutions that solve complex real-world problems.",
            },
            {
              title: "Research & Innovation",
              description:
                "I stay current with the latest AI/ML developments and apply cutting-edge techniques to create innovative solutions.",
            },
            {
              title: "Full-Stack Integration",
              description:
                "I combine ML models with robust web applications to deliver complete, production-ready solutions.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="text-center p-4 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "rgba(99, 102, 241, 0.05)",
                scale: 1.03,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 15
                }
              }}
            >
              <h4 className="text-lg font-bold mb-2">{item.title}</h4>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
} 