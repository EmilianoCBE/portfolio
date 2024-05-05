import { useEffect, useRef } from 'react'
import './HomePage.css'
import { Navbar } from "../components/Navbar"
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Experience } from '../sections/Experience'

export const HomePage = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500
    });
  })

  const heroRef = useRef(null)
  const projectsRef = useRef(null)
  const aboutRef = useRef(null)
  const contactRef = useRef(null)

  // const scrollRef = (ref) => {
  //   window.scrollTo({
  //     top: ref.current.offsetTop,
  //     behavior: 'smooth'
  //   })
  // }

  return (
    <div>
      <Navbar />
      <section ref={heroRef} className='homepage-section' id='hero'>
        <div data-aos='fade-up'>
          <h1>Portafolio Personal</h1>
          <h4>Hola, ¿cómo te va?</h4>
          <p>Me llamo <strong>Emiliano</strong> y soy un <strong>Frontend Web Developer</strong></p>
        </div>
      </section>
      <section ref={projectsRef} className='homepage-section' id='projects' data-aos='fade-up'>
        <Projects />
      </section>
      <section ref={aboutRef} className='homepage-section' id='experience' data-aos='fade-up'>
        <Experience />
      </section>
      <section ref={aboutRef} className='homepage-section' id='about' data-aos='fade-up'>
        <div>
          <h1>Sobre mí</h1>
          
        </div>
      </section>
      <section ref={contactRef} className='homepage-section' id='contact' data-aos='fade-up'>
        <Contact />
      </section>
    </div>
  )
}
