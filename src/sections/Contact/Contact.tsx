
export const Contact = () => {
  return (
    <section className="section-container min-h-dvh flex flex-col items-center justify-center gap-4 py-[100px]">
      <h2 className="text-5xl md:text-6xl text-center font-medium">
        Contact
      </h2>
      <p className="text-lg text-center pt-4">
        I am always looking for new opportunities and challenges. Feel free to contact me.
      </p>
      <div className="flex gap-4 pt-4">
        <a href="mailto:e.carrizales1305@gmail.com" className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300">
          Send Email
        </a>
        <a href="https://github.com/EmilianoCBE" className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300">
          Github  
        </a>  
        <a href="https://www.linkedin.com/in/emiliano-carrizales/"  className="border border-[#b3b3b3] py-3 px-6 rounded-2xl text-[#eaeaea] hover:bg-[#eaeaea] hover:text-[#1e1e1e] ease-in-out transition-colors duration-300">
          LinkedIn
        </a>
      </div>
    </section>
  )
}
