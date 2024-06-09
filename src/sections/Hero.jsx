import { HTML } from '../components/icons/HTML'
import { ReactSVG } from '../components/icons/ReactSVG'
import { CSS } from '../components/icons/CSS'
import './Hero.css'
import { Javascript } from '../components/icons/Javascript'
import { Bootstrap } from '../components/icons/Bootstrap'

export const Hero = () => {
  return (
    <div data-aos='fade-up' className='hero-container'>
      <div className='hero-content'>
        <h1 className='hero-title'>Front-end Developer</h1>
        <h4 className='hero-subtitle'>Hola, ¿cómo te va?</h4>
        <p className='hero-description'>Me llamo <strong>Emiliano</strong> y soy un <strong>Frontend Web Developer</strong></p>
      </div>
      <div className='hero-tech'>
        <p>Tecnologías</p>
        <div className='hero-tech-icons'>
          <HTML />
          <CSS />
          <Javascript />
          <ReactSVG />
          <Bootstrap />
        </div>
      </div>
    </div>
  )
}
