//import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.5,
    },
  }
}


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

      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col items-center justify-center gap-4"
      >
        <span className="text-xl relative">Web Development</span>
        <h1 className="text-7xl md:text-8xl break-words font-medium text-center max-w-full relative bg-gradient-to-r from-[#eaeaea] to-stone-500 bg-clip-text tracking-tight text-transparent">
          Frontend Developer
        </h1>
        <p className="text-lg md:text-xl text-center w-full pt-2 relative">
          Hola, ¿cómo te va?, me llamo Emiliano y soy un Desarrollador Frontend
        </p>
        <a
          href="#"
          className="mt-7 py-3 px-6 rounded-2xl bg-[#eaeaea] text-black ease-in-out transition-colors duration-300 relative"
          rel="noreferrer noopener"
        >
          My Work
        </a>
      </motion.div>
    </section>
  );
};