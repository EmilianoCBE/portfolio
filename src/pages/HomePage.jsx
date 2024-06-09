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
      <section ref={heroRef} className='container' id='inicio'>
        <Hero />
      </section>
      <section ref={projectsRef} className='container' id='projects'>
        <Projects />
      </section>
      <section ref={aboutRef} className='container' id='experience'>
        <Experience/>
      </section>
      <section ref={aboutRef} className='container' id='about'>
        <About />
      </section>
      <section ref={contactRef} className='container' id='contact'>
        <Contact />
      </section>
    </>
  )
}
