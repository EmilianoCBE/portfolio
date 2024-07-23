import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data/index'

export const Grid = () => {
  return (
    <section
      id='about'
    > 
      <BentoGrid>
        {
          gridItems.map((project, index) => (
            <BentoGridItem
              key={index}
              id={project.id}
              title={project.title}
              description={project.des}
            />
          ))
        }
      </BentoGrid>
    </section>
  )
}
