import { useEffect, useRef } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Error404Page.css'

export const Error404Page = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  })
  return (
    <>
      <section className='error-section'>
        <div data-aos='fade-up'>
          <h2 className='title-error'>ERROR 404</h2>
          <h4 className='subtitle-error'>Página no encontrada</h4>
          <button>
            {/* <a href='/'>Go back</a> */}
          </button>
        </div>
      </section>
    </>
  )
}
