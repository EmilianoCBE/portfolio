// src/pages/ProjectsPage.jsx
import { Navbar, Footer } from "@/components" // Asegúrate de importar estos
import { projects } from "@/data/projects" // Importa tus datos de proyectos
import { ProjectCard } from "@/components/ProjectCard" // Importa el componente de tarjeta
import { motion } from "framer-motion"

export const ProjectsPage = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='fixed inset-0 -z-10'>
        <div className='relative h-full'>
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
          </div>
        </div>
      </div>  

      <Navbar />
      
      <main className="section-container pt-[100px] pb-[50px] min-h-dvh">
        <motion.h1 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-7xl text-center font-medium pb-16 pt-10 text-[#eaeaea]"
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
          {
            projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))
          }
        </div>

        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-stone-400 mt-20 text-lg"
        >
          ¡Explora el código de estos y más en mi GitHub!
        </motion.p>
      </main>

      <Footer />
    </div>
  )
}