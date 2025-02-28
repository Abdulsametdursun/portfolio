'use client'
import { cn } from '@/lib/utils'
import { BackgroundGradientAnimation } from './background-gradient-animation'
import { GlobeDemo } from './GridGlobe'
import { useState } from 'react'
import { IoCopyOutline } from 'react-icons/io5'

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-6 lg:gap-12 mx-auto',
        className,
      )}
    >
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: React.ReactNode
  icon?: React.ReactNode
  id?: number
  img?: string
  imgClassName?: string
  titleClassName?: string
  spareImg?: string
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async event => {
    event.stopPropagation() // Prevents click from propagating to parent elements
    console.log('handleCopy triggered!')

    try {
      await navigator.clipboard.writeText('sametdursun1998@hotmail.com')
      setCopied(true)
      console.log('Email copied!')
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  return (
    <div
      className={cn(
        'row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4',
        className,
      )}
      style={{
        background: 'rgb(2,0,36)',
        backgroundColor:
          'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(82,17,185,1) 35%, rgba(0,20,255,1) 100%)',
      }}
    >
      <div className={id === 6 ? 'flex justify-center h-full' : ''}>
        <div className='w-full h-full absolute'>
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover object-center')}
            />
          )}
        </div>
        <div
          className={cn(
            'absolute right-0 -bottom-5',
            id === 5 && 'w-full opacity-80',
          )}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={cn('object-cover, object-center w-full h-full')}
            />
          )}
        </div>
        <div className=''>
          {id === 6 && (
            <BackgroundGradientAnimation></BackgroundGradientAnimation>
          )}
          <div
            className={cn(
              titleClassName,
              'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10',
            )}
          >
            <div className='font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10'>
              {description}
            </div>
            <div className='font-sans font-bold text-lg lg:text-3xl max-w-96 z-10'>
              {title}
            </div>

            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className='flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2'>
                <div className='flex flex-col gap-3 lg:gap-8'>
                  {['React.js', 'Next.js', 'JavaScript'].map(item => (
                    <span
                      key={item}
                      className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                    >
                      {item}
                    </span>
                  ))}
                  <span className='lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]' />
                </div>
                <div className='flex flex-col gap-3 lg:gap-8'>
                  <span className='lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]' />
                  {['MongoDB', 'Express.js', 'TypeScript'].map(item => (
                    <span
                      key={item}
                      className='lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {id === 6 && (
              <div className='mt-5 relative'>
                <div className='flex justify-center items-center mt-4'>
                  <button
                    onClick={handleCopy}
                    className='relative flex items-center gap-2 px-7 py-3 rounded-lg text-white 
               bg-gradient-to-r from-[#4a00e0] to-[#000000] hover:from-[#000000] hover:to-[#9235cf] 
               transition-all duration-300 shadow-lg shadow-[#8e2de2]/50'
                    aria-label='Copy Email'
                  >
                    <IoCopyOutline className='h-5 w-5 text-white opacity-80' />
                    <span className='text-sm font-medium'>
                      {copied ? 'Copied!' : 'Copy Email'}
                    </span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
