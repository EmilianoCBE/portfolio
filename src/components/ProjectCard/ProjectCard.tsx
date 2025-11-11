import { motion } from "framer-motion";

export interface Project {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="max-w-md w-full rounded-xl overflow-hidden shadow-lg bg-[#1e1e1e] border border-[#3a3a3a] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(234,234,234,0.1)] h-[456px]"
    >
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-48 object-cover object-top"
        />
        <div className="p-6">
          <h3 className="mb-3 text-2xl font-semibold text-[#eaeaea]">{project.name}</h3>
          <p className="mb-4 text-stone-400 text-base">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology, index) => (
              <span key={index} className="bg-[#3a3a3a] text-[#eaeaea] text-sm py-1 px-3 rounded-full font-medium">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </a>
    </motion.div>
  );
};