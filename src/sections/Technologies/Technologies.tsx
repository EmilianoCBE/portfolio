import { Ripple } from "@/components/magicui/ripple";
import { HtmlIcon, CssIcon, ReactIcon, TailwindIcon, TypescriptIcon } from "@/assets/icons";
import { motion } from "framer-motion";


const iconVariants = (duration:number) => ({
  initial: {
    y: -10,
  },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    }
  }
})

export const Technologies = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px] relative">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="text-5xl md:text-6xl text-center font-medium mb-16"
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
          initial="initial"
          animate="animate"
          variants={iconVariants(1.5)}
          className="p-4"
        >
          <ReactIcon />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2.5)}
          className="p-4"
        >
          <HtmlIcon />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(3)}
          className="p-4"
        >
          <CssIcon />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(5)}
          className="p-4"
        >
          <TailwindIcon />
        </motion.div>
        <motion.div 
          initial="initial"
          animate="animate"
          variants={iconVariants(2)}
          className="p-4"
        >
          <TypescriptIcon />
        </motion.div>
      </motion.div>  
    </section>
  );
};