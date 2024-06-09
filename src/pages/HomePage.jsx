import { useEffect, useRef } from 'react'
import { Navbar } from '../components/Navbar'
import { Projects } from '../sections/Projects'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { About } from '../sections/About'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './HomePage.css'
import { Hero } from '../sections/Hero'

export const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200
    })
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
    <>
      <Navbar />
      <section ref={heroRef} className='homepage-section' id='inicio'>
        <Hero />
      </section>
      <section ref={projectsRef} className='homepage-section' id='projects'>
        <Projects />
      </section>
      <section ref={aboutRef} className='homepage-section' id='experience'>
        <Experience/>
      </section>
      <section ref={aboutRef} className='homepage-section' id='about'>
        <About />
      </section>
      <section ref={contactRef} className='homepage-section' id='contact'>
        <Contact />
      </section>
    </>
  )
}
