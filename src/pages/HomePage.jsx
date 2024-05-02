import { useRef } from 'react'
import './HomePage.css'
import { Navbar } from "../components/Navbar"

export const HomePage = () => {

  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  const scrollRef = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div>
      <Navbar />
      <section ref={heroRef} className='homepage-section' id='hero'>
        <div>
          <h1>Portafolio Personal</h1>
          <h4>Hola, ¿cómo te va?</h4>
          <p>Me llamo <strong>Emiliano</strong> y soy un <strong>Frontend Web Developer</strong></p>
        </div>
      </section>
      <section ref={projectsRef} className='homepage-section' id='projects'>
        <div>
          <h1>Proyectos</h1>
          
        </div>
      </section>
      <section ref={aboutRef} className='homepage-section' id='about'>
        <div>
          <h1>Sobre mí</h1>
          
        </div>
      </section>
      <section ref={contactRef} className='homepage-section' id='contact'>
        <div>
          <h1>Contacto</h1>
          
        </div>
      </section>
    </div>
  )
}
