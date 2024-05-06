import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import './Navbar.css'

export const Navbar = () => {

  return (
    <div id='navbarDisplay'>
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
