import { motion } from "framer-motion"

export const Contact = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px]">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl text-center font-medium"
      >
        Contact
      </motion.h2>
      <motion.p 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="text-lg text-center pt-4"
      >
        I am always looking for new opportunities and challenges. Feel free to contact me.
      </motion.p>
      <div className="flex gap-4 pt-4">
        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.6 }}
          href="mailto:e.carrizales1305@gmail.com" className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300"
        >
          Send Email
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.3 }}
          href="https://github.com/EmilianoCBE" className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300"
        >
          Github  
        </motion.a>  
        <motion.a 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          href="https://www.linkedin.com/in/emiliano-carrizales/"  className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300"
        >
          LinkedIn
        </motion.a>
      </div>
    </section>
  )
}
