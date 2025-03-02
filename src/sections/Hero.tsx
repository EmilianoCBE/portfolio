import { FlickeringGrid } from "@/components/magicui/flickering-grid";

export const Hero = () => {
  return (
    <section className="relative section-container min-h-dvh flex flex-col items-center justify-center gap-4 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <FlickeringGrid
          className="w-[115000px] h-[700px]"
          squareSize={8}
          gridGap={6}
          color="#27272a"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
      </div>

      {/* Hero Content */}
      <span className="text-xl relative">Web Development</span>
      <h1 className="text-7xl md:text-8xl break-words font-medium text-center max-w-full relative">
        Frontend Developer
      </h1>
      <p className="text-lg md:text-xl text-center w-full pt-2 relative">
        Hola, ¿cómo te va?, me llamo Emiliano y soy un Desarrollador Frontend
      </p>
      <a
        href="#"
        className="border border-solid border-[#eaeaea] mt-7 py-3 px-6 rounded-2xl hover:bg-[#eaeaea] hover:text-black ease-in-out transition-colors duration-300 relative"
      >
        My Work
      </a>
    </section>
  );
};