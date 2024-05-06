import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import './Navbar.css'
import { useEffect, useState } from 'react'

export const Navbar = () => {

  const [scroll, setScroll] = useState(0)  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 350);
    });
  }, []);  

  return (
    <div id='navbarDisplay' className={scroll ? 'navBarContainer' : ''}>
      <header className='navbar'>
        <div>
          <h3>
            <a href="#hero">Portfolio</a>
          </h3>
        </div>
        <div className='navbar-links'>
          <ul>
            <li>
              <a href="#projects">Proyectos</a>
            </li>
            <li>
              <a href="#experience">Experiencia</a>
            </li>
            <li>
              <a href="#about">Sobre mí</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </ul>
        </div>
        <div className='navbar-icons'>
          <a href="https://github.com/EmilianoCBE" target='_blank'>
            <GithubFilled />
          </a>
          <a href="https://www.linkedin.com/in/emiliano-carrizales" target='_blank'>
            <LinkedinFilled />
          </a>
        </div>
      </header>
    </div>
  )
}
