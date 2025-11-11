// src/sections/Projects.jsx
import { projects } from "@/data/projects"
import { motion } from "framer-motion"
import { Link } from "react-router-dom" // Importa Link

export const Projects = () => {
  const featuredProjects = projects.slice(0, 2); 
  
  return (
    <section id="projects" className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px]">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl text-center font-medium pb-10"
      >
        Proyectos  
      </motion.h2>

      <div>
        {
          featuredProjects.map((project, index) => (
            <a href={project.link} target="_blank" key={index} className="flex flex-wrap mb-8 md:justify-between md:items-center">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/4"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  width={250}
                  className="rounded-lg mb-4"
                />
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl md:w-3/4"
              >
                <h3 className="mb-2 text-2xl font-medium">
                  {project.name}
                </h3>
                <p className="mb-4 text-stone-400">
                  {project.description}
                </p>
                {
                  project.technologies.map((technology, index) => (
                    <span key={index} className="mr-2 bg-[#3a3a3a] text-[#eaeaea] py-1 px-2 rounded-md">
                      {technology}
                    </span>
                  ))
                }
              </motion.div>
            </a>
          ))
        }
      </div>

      <motion.div
        whileInView={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-10"
      >
        <Link 
          to="/projects" 
          className="inline-block py-3 px-8 rounded-full text-[#1e1e1e] bg-[#eaeaea] font-semibold transition-all duration-300 hover:bg-[#b3b3b3] hover:shadow-lg"
        >
          Ver Todos los Proyectos
        </Link>
      </motion.div>
    </section>
  )
}