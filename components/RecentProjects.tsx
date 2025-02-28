'use client'
import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'

const RecentProjects = () => {
  return (
    <div className='pt-28 pb-52' id='projects'>
      <h1 className='heading'>
        A small selection of{' '}
        <span className='text-purple'>recent projects</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center p-4 gap-32 mt-18'>
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            onClick={() => window.open(link, '_blank')}
            className='lg:min-h-[50rem] h-[42rem] flex items-center justify-center sm:w-[35rem] w-[95vw] cursor-pointer'
          >
            <PinContainer title={link} href={link}>
              <div className='relative flex items-center justify-center sm:w-[35rem] w-[95vw] overflow-hidden h-[30vh] lg:h-[36vh] mb-16'>
                <div
                  className='relative w-full h-full overflow-hidden lg:rounded-3xl'
                  style={{ backgroundColor: '#13162D' }}
                >
                  <img src='/bg.png' alt='bg-img' />
                </div>
                <img src={img} alt={title} className='z-10 absolute bottom-0' />
              </div>
              <h1 className='font-bold lg:text-3xl md:text-2xl text-xl line-clamp-1'>
                {title}
              </h1>
              <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>
                {des}
              </p>
              <div className='flex items-center justify-between mt-10 mb-6'>
                <div className='flex items-center'>
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className='border border-white/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex justify-center items-center'
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className='p-2' />
                    </div>
                  ))}
                </div>
                <div className='flex justify-center items-center'>
                  <p className='flex lg:text-xl md:text-lg text-sm text-purple'>
                    Check Live Site
                  </p>
                  <FaLocationArrow className='ms-4' color='#CBACF9' />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects
