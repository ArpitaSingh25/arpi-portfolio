"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/Section";
import { SectionTitle } from "@/components/SectionTitle";
import { Button } from "@/components/Button";
import { FaArrowRight, FaTimes } from "react-icons/fa";

interface Project {
  id: string;
  title: string;
  description: string;
  challenge: string;
  role: string;
  process: string[];
  outcome: string;
  learnings: string;
  images: string[];
  tags: string[];
  prototypeLink?: string;
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "brain-tumor-detection",
      title: "Brain Tumor Detection using Deep Learning",
      description: "Developed a hybrid deep learning model combining CNNs and Vision Transformers (ViTs) for accurate brain tumor detection from MRI scans.",
      challenge: "The challenge was to improve the accuracy of brain tumor detection while reducing dependency on radiologists for diagnosis.",
      role: "Machine Learning Engineer",
      process: [
        "Developed a hybrid deep learning model combining CNNs and Vision Transformers",
        "Enhanced medical image classification using transfer learning",
        "Implemented automated feature extraction techniques",
        "Conducted extensive model training and validation",
        "Achieved 91% accuracy in classifying brain tumors"
      ],
      outcome: "Achieved 91% accuracy in classifying brain tumors, outperforming traditional machine learning models and standalone deep learning techniques. Successfully reduced diagnostic dependency on radiologists through automated feature extraction.",
      learnings: "This project deepened my understanding of medical image processing, deep learning architectures, and the importance of model interpretability in healthcare applications.",
      images: ["/Brain Tumor.jpeg", "/images/brain-tumor-2.jpg", "/images/brain-tumor-3.jpg"],
      tags: ["Deep Learning", "Computer Vision", "Healthcare AI", "Python", "TensorFlow"],
      prototypeLink: "https://github.com/ArpitaSingh25/Brain-Tumor-Detection"
    },
    {
      id: "medical-insurance-prediction",
      title: "Medical Insurance Cost Prediction",
      description: "Developed a machine learning model to predict medical insurance costs based on patient demographics and health attributes.",
      challenge: "Creating an accurate prediction model for medical insurance costs while handling complex patient data and multiple variables.",
      role: "Data Scientist & ML Engineer",
      process: [
        "Developed ML model using Python, Scikit-learn, Pandas, and NumPy",
        "Implemented data preprocessing techniques for missing values and categorical variables",
        "Built and evaluated multiple regression models",
        "Performed data visualization using Matplotlib and Seaborn",
        "Conducted feature importance analysis"
      ],
      outcome: "Successfully created a model that accurately predicts medical insurance costs, improving cost estimation accuracy and helping in better financial planning.",
      learnings: "Gained valuable experience in regression modeling, feature engineering, and handling real-world healthcare data.",
      images: ["/images/insurance-1.jpg", "/images/insurance-2.jpg", "/images/insurance-3.jpg"],
      tags: ["Machine Learning", "Python", "Data Analysis", "Healthcare", "Scikit-learn"],
      prototypeLink: "https://github.com/ArpitaSingh25/Medical-Insurance-Price-Prediction"
    },
    {
      id: "food-court-website",
      title: "Food Court Website using SpringBoot",
      description: "Built a comprehensive food court system using Spring Boot, featuring real-time order and inventory management.",
      challenge: "Developing a scalable and secure platform for food court management with real-time updates and robust database operations.",
      role: "Full Stack Developer",
      process: [
        "Built an extensive food court system using React and Spring Boot",
        "Integrated RESTful APIs for seamless frontend-backend communication",
        "Designed a modular repository layer with Spring Data JPA",
        "Implemented secure, scalable CRUD operations",
        "Created robust database architecture for order and inventory management"
      ],
      outcome: "Successfully deployed a fully functional food court management system with real-time updates, secure authentication, and efficient order processing.",
      learnings: "Enhanced my understanding of full-stack development, microservices architecture, and real-time data handling.",
      images: ["/images/food-court-1.jpg", "/images/food-court-2.jpg", "/images/food-court-3.jpg"],
      tags: ["Spring Boot", "React", "Bootstrap", "REST API", "Database Design"],
      prototypeLink: "https://github.com/ArpitaSingh25/Food-Court-Website-using-Springboot"
    }
  ];

  return (
    <Section id="projects">
      <SectionTitle
        title="Projects"
        subtitle="A showcase of my machine learning models and full-stack applications, demonstrating my expertise in AI and software development."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div
              className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer h-full flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 bg-muted">
                <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                  {/* Placeholder for project image - replace with actual images */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="48"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                </div>
                {/* Uncomment and use actual images
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
                */}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-xs px-2 py-1 rounded-full bg-secondary/10 text-secondary"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  icon={<FaArrowRight />}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProject(project);
                  }}
                >
                  View Case Study
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm overflow-y-auto"
            onClick={() => setSelectedProject(null)}
          >
            <div className="min-h-screen px-4 py-8 flex items-center justify-center">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 20 }}
                className="bg-card rounded-xl shadow-lg max-w-4xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center p-6 border-b border-border bg-card">
                  <h2 className="text-2xl font-bold">{selectedProject.title}</h2>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                    aria-label="Close modal"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="p-6 overflow-y-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Challenge</h3>
                      <p className="text-muted-foreground mb-6">
                        {selectedProject.challenge}
                      </p>
                      <h3 className="text-xl font-bold mb-2">My Role</h3>
                      <p className="text-muted-foreground mb-6">
                        {selectedProject.role}
                      </p>
                    </div>
                    <div className="relative h-64 bg-muted rounded-lg">
                      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                        {/* Placeholder for project image - replace with actual images */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="64"
                          height="64"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </div>
                      {/* Uncomment and use actual images
                      <Image
                        src={selectedProject.images[0]}
                        alt={selectedProject.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                      */}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold mb-4">Design Process</h3>
                    <ol className="space-y-2 ml-6 list-decimal text-muted-foreground">
                      {selectedProject.process.map((step, index) => (
                        <li key={index}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                    {[1, 2, 3].map((_, index) => (
                      <div key={index} className="relative h-48 bg-muted rounded-lg">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                          {/* Placeholder for project image - replace with actual images */}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                            <circle cx="8.5" cy="8.5" r="1.5" />
                            <path d="M21 15l-5-5L5 21" />
                          </svg>
                        </div>
                        {/* Uncomment and use actual images
                        <Image
                          src={selectedProject.images[index]}
                          alt={`${selectedProject.title} - Image ${index + 1}`}
                          fill
                          className="object-cover rounded-lg"
                        />
                        */}
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-bold mb-2">Outcome</h3>
                      <p className="text-muted-foreground">
                        {selectedProject.outcome}
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Key Learnings</h3>
                      <p className="text-muted-foreground">
                        {selectedProject.learnings}
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center mt-8">
                    {selectedProject.prototypeLink && (
                      <Button
                        href={selectedProject.prototypeLink}
                        external
                        variant="secondary"
                      >
                        View Project on GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
} 
