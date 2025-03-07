import { motion } from "framer-motion";

export const About = () => {
  return (
    <section id="about" className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px] relative">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl text-center font-medium pb-16"
      >
        About
      </motion.h2>
      <div className="flex flex-col gap-4 max-w-2xl">
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-center"
        >
          Soy un Desarrollador Web autodidacta enfocado en el Frontend, con un poco de experiencia en el backend con tecnologías como PHP y Node.js. 
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="text-lg md:text-xl text-center"
        >
          He desarrollado sitios web responsivos, así como aplicaciones web para las empresas que he trabajado. Mantengo un constante aprendizaje sobre las tecnologías que se usan en la actualidad y me encanta ver plasmado a la realidad las ideas que emburjan mi cabeza. 
        </motion.p>

        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="text-lg md:text-xl text-center"
        >
          Mi meta es aplicar con facilidad los conocimientos del desarrollo weby poder ayudar a las empresas a tener una presencia en línea que les ayude a crecer y a tener un mayor alcance.
        </motion.p>
      </div>
    </section>
  );
};