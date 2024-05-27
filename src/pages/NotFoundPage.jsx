import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './NotFoundPage.css'
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  })
  return (
    <>
      <div className="stars"></div>
      <section className='error-section'>
          <h2 className='title-error'>ERROR 404</h2>
          <h4 className='subtitle-error'>Página no encontrada</h4>
          <Link to='/' className='link-error'>Volver al inicio</Link>
      </section>
    </>
  )
}
