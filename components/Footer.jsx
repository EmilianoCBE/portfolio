import React from 'react'
import { MagicButton } from './ui/MagicButton'
import { FaGithub, FaLinkedin, FaLocationArrow, FaMailBulk, FaMailchimp } from 'react-icons/fa'
import { socialMedia } from '@/data'

export const Footer = () => {
  return (
    <footer className='w-ful pt-20 md:pt-40 mb-[100px] md:mb-5 pb-10' id='contact'>
      <div className='w-full absolute left-0 -bottom-72 min-h-96'>
        <img src="/footer-grid.svg" alt="grid" className='w-full h-full opacity-70'/>
      </div>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Pongámonos en <span className='text-purple-300'> Contacto</span>
        </h1>
        <div className='max-w-[600px]'>
          <p className='text-white-200 md:mt-10 my-5 text-center'>
            Si te interesa trabajar conmigo puedes encontrarme por medio de correo electrónico o también puedes contactarme por medio de mis redes sociales.
          </p>
        </div>
        <div className='flex flex-col md:flex-row gap-5'>
          <a href="https://github.com/EmilianoCBE">
            <MagicButton title="Github" icon={<FaGithub />} position='right' />
          </a>
          <a href="mailto:e.carrizales1305@gmail.com">
            <MagicButton title="Envíame un correo" icon={<FaMailBulk />} position='right' />
          </a>
          <a href="www.linkedin.com/in/emiliano-carrizales">
            <MagicButton title="Linkdin" icon={<FaLinkedin />} position='right' />
          </a>
        </div>
      </div>

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Emiliano</p>
        <div className='flex items-center md:gap-3 gap-6'>
          {
            socialMedia.map((profile) => (
              <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-100 rounded-lg border border-black">
                <img src={profile.img} alt={profile.id} width={20} height={20}/>
              </div>
            ))
          }
        </div>
      </div>
    </footer>
  )
}
