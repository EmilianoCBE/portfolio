import { Flex } from 'antd';
import './Experience.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

export const Experience = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1200
    });
  })

  return (
    <Flex vertical>
      <h2>Experiencia</h2>
      <div className='container' data-aos='fade-up'>
          <ul className='ul-experience'>
            <li className='li-experience'>
              <h3 className='title-experience'>Ingeniería en sistemas digitales y robótica 2018-2022</h3>
              <p>Estudiante de la carrera de ISD en el tecnológico de Monterrey hasta séptimo semestre</p>
            </li>
            <li className='li-experience'>
              <h3 className='title-experience'>Frontend Developer en Nett Design Agency 2023</h3>
              <p>Desarrollador Frontend en la empresa Nett y encargado de plasmar los diseños UX/UI en las páginas web</p>
            </li>
            <li className='li-experience'>
              <h3 className='title-experience'>Frontend Developer National Unity Insurance Compane 2023-</h3>
              <p>Encargado de diseño y desarrollo del Frontend de la página web y del sistema de venta de póliza</p>
            </li>
          </ul>
        </div>
    </Flex>
  );
};
