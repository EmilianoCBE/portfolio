import { Ripple } from "@/components/magicui/ripple";
import { HtmlIcon, CssIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "@/assets/icons";
import { motion } from "framer-motion";

export const Technologies = () => {
  return (
    <section id="technologies" className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px] relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-6xl text-center font-medium pb-16"
      >
        Technologies
      </motion.h2>

      <div className="absolute inset-0 pointer-events-none">
        <Ripple mainCircleOpacity={0.8} numCircles={9} />
      </div>

      <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          animate={{ y: [10, -10] }}
          transition={{ duration: 1.5, ease: "linear", repeat: Infinity, repeatType: 'reverse' }}
          className="p-4"
        >
          <ReactIcon aria-hidden="true"/>
        </motion.div>
        <motion.div 
          animate={{ y: [10, -10] }}
          transition={{ duration: 2.5, ease: "linear", repeat: Infinity, repeatType: 'loop' }}
          className="p-4"
        >
          <HtmlIcon aria-hidden="true"/>
        </motion.div>
        <motion.div 
          animate={{ y: [10, -10] }}
          transition={{ duration: 3, ease: "linear", repeat: Infinity, repeatType: 'loop' }}
          className="p-4"
        >
          <CssIcon aria-hidden="true"/>
        </motion.div>
        <motion.div 
          animate={{ y: [10, -10] }}
          transition={{ duration: 4, ease: "linear", repeat: Infinity, repeatType: 'loop' }}
          className="p-4"
        >
          <TailwindIcon aria-hidden="true"/>
        </motion.div>
        <motion.div 
          animate={{ y: [10, -10] }}
          transition={{ duration: 2, ease: "linear", repeat: Infinity, repeatType: 'loop' }}
          className="p-4"
        >
          <TypescriptIcon aria-hidden="true"/>
        </motion.div>
      </motion.div>  
    </section>
  );
};