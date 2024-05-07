import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  })

  return (
    <article>
      <h2>¿Quién soy?</h2>
      <div className="about-description" data-aos='fade-up'>
        <p>¡Excelente pregunta!</p>
        <p>A veces se me complica responder eso pero...</p>
        <p>
          Por lo pronto sé que soy un Desarrollador Frontend dedicado a plasmar el diseño de una página web en código.
          Así mismo, busco expandir mis conocimiento del Desarrollo Web y estoy explorando los confines del desarrollo Backend, 
          da un poco de miedo, pero la aventura y la diversión es lo que importa.
        </p>
        <p>
          Emocionado por todo lo nuevo que puedo aprender y de poder seguir afinando mis habilidades en el desarrollo web.
        </p>
        <p>
          No puedo esperar a ver que me depara el futuro, pero por ahora, estoy disfrutando el presente.
        </p>
        <p>
          Si quieres saber más de mi, no dudes en contactarme.
        </p>
      </div>
    </article>
  );
};
