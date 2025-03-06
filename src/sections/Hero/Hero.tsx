//import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative section-container min-h-dvh flex flex-col items-center justify-center gap-4 overflow-hidden">
      {/* <div className="absolute inset-0 flex items-center justify-center -z-10">
        <FlickeringGrid
          className="w-[1150px] h-[700px]"
          squareSize={8}
          gridGap={6}
          color="#27272a"
          maxOpacity={0.5}
          flickerChance={0.0}
        />
      </div> */}
        <motion.span 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-xl relative"
        >
          Web Development
        </motion.span>
        <motion.h1 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-8xl break-words font-medium text-center max-w-full relative bg-gradient-to-r from-[#eaeaea] to-stone-500 bg-clip-text tracking-tight text-transparent"
        >
          Frontend Developer
        </motion.h1>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-lg md:text-xl text-center w-full pt-2 relative pb-4"
        >
          Hola, ¿cómo te va?, me llamo Emiliano y soy un Desarrollador Frontend
        </motion.p>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          href="#"
          className="py-3 px-6 rounded-2xl bg-[#eaeaea] text-black ease-in-out transition-colors duration-300 relative"
          rel="noreferrer noopener"
        >
          My Work
        </motion.a>
    </section>
  );
};