import { GithubFilled, LinkedinFilled } from '@ant-design/icons'
import './Header.css'

export const Header = () => {

  return (
    <>
    <header className='header'>
      <div>
        <h3>
          <a href="#hero">Portfolio</a>
        </h3>
      </div>
      <div className='header-links'>
        <ul>
          <li>
            <a href="#projects">Proyectos</a>
          </li>
          <li>
            <a href="#about">Sobre mí</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
      <div className='header-icons'>
        <GithubFilled />
        <LinkedinFilled />
      </div>
    </header>
    </>
  )
}
