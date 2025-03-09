import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export const NotFound = () => {
  return (
    <main>
      <div className='fixed inset-0 -z-10'>
        <div className='relative h-full'>
          <div className="relative h-full w-full bg-black">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
            </div>
              {/* <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)]">
              </div> */}
          </div>
        </div>
      </div>  
      <section className="relative section-container min-h-dvh flex flex-col items-center justify-center gap-4 overflow-hidden">
        <motion.h2 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-9xl text-center font-medium pb-4"
        >
          Not Found
        </motion.h2>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="text-xl md:text-2xl text-center pb-2"
        >
          La página que buscas no existe.
        </motion.p>
        <motion.p 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.9 }}
          className="text-xl md:text-2xl text-center pb-10"
        >
          Porfavor regresa a la página principal pulsando el botón de abajo.
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
        >
          <Link 
            to={'/'} 
            className="py-3 px-6 rounded-2xl bg-[#eaeaea] text-black ease-in-out transition-colors duration-300 hover:bg-[#b3b3b3]"
          >
            Regresar
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
