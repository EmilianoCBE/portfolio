import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/moving-border'

export const Experience = () => {
  return (
    <div className='pt-0 pb-20 sm:pt-10 sm:pb-40' id='experience'>
      <h1 className='heading'>
        Mi
        <span className='text-purple-300'> Experiencia Laboral</span>
      </h1>
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {
          workExperience.map((card) => (
            <Button
              key={card.id}
              borderRadius='1.75rem'
              className='flex-1 text-white border-neutral-200 dark:border-slate-800'
              duration={Math.floor(Math.random() * 10000) + 10000}
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-5 py-6 lg:p-10 gap-2'>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))
        }
      </div>
    </div>
  )
}
