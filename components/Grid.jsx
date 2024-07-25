import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'

export const Grid = () => {
  return (
    <section
      id='about'
    > 
      <BentoGrid>
        {
          gridItems.map(({id, title, des, className, img, imgClassName, titleClassName, spareImg}) => (
            <BentoGridItem
              key={id}
              id={id}
              title={title}
              description={des}
              className={className}
              img={img}
              imgClassName={imgClassName}
              titleClassName={titleClassName}
              spareImg={spareImg}
            />
          ))
        }
      </BentoGrid>
    </section>
  )
}
