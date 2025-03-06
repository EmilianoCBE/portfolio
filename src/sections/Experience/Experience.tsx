import { experience } from "@/data/experience";
import { motion } from "framer-motion";

export const Experience = () => {
  return (
    <section id="experience" className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px] relative overflow-hidden">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl text-center font-medium text-[#eaeaea] z-10 pb-10"
      >
        Mi Experiencia Laboral
      </motion.h2>
      {/* <p className="text-lg md:text-xl text-center w-full pt-2 text-[#b3b3b3] z-10">
        Here are some of the companies I've worked with
      </p> */}

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mt-8">
        {experience.map((job, index) => (
          <div
            key={index}
            className="relative p-6 border border-[#3a3a3a] bg-[#1e1e1e] rounded-2xl shadow-md"
          >
            <h3 className="text-2xl text-[#eaeaea] font-semibold">{job.title}</h3>
            <p className="text-lg text-[#b3b3b3] mt-1">
              {job.company} • {job.location}
            </p>
            <p className="text-sm text-gray-400">{job.date}</p>
            <p className="mt-3 text-gray-300">{job.description}</p>
          </div>
        ))}
      </div> */}

      <div>
        {
          experience.map((job, index) => (
            <div key={index} className="mb-8 flex flex-wrap md:justify-center">
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/4"
              >
                <p className="mb-2 text-sm text-[#b3b3b3]">
                  {job.date}
                </p>
              </motion.div>
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full md:w-3/4"
              >
                <h3 className="text-xl md:te xt-5xl font-medium mb-2">
                  {job.title} -{" "}
                  <span className="text-sm text-[#b3b3b3]">  
                    {job.company}
                  </span>
                </h3>
                <p className="mb-4 text-stone-400">
                  {job.description}
                </p>
              </motion.div>
            </div>
          ))
        }
      </div>
    </section>
  );
};