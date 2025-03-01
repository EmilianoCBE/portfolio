
export const Hero = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4">
      <span className="text-xl">Web Development</span>
      <h1 className="text-7xl md:text-8xl break-words font-medium text-center max-w-full">
        Frontend Developer
      </h1>
      <p className="text-lg md:text-xl text-center w-full pt-2">
        Hola, ¿cómo te va?, me llamo Emiliano y soy un Desarrollador Frontend
      </p>
      <a href="#" className="border border-solid border-[#eaeaea] mt-7 py-3 px-6 rounded-2xl hover:bg-[#eaeaea] hover:text-black ease-in-out transition-colors duration-300">
        My Work
      </a>
    </section>
  )
}
