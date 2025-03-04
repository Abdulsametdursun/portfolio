import React from 'react'
import ShimmerButton from './ui/ShimmerButton'
import { FaLocationArrow } from 'react-icons/fa'
import { socialMedia } from '@/data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='w-full pt-20 pb-10 mb-[100px] mb:mb-5' id='contact'>
      <div className='flex flex-col items-center'>
        <h1 className='heading lg:max-w-[45vw]'>
          Are you prepared to elevate <span className='text-purple'>your</span>{' '}
          digital presence to the next level?
        </h1>
        <p className='text-white-200 md:mt-10 my-5 text-center'>
          Contact me today, and let&apos;s discuss how I can help you achieve
          your goals.
        </p>
        <a href='mailto:sametdursun1998@hotmail.com'>
          <ShimmerButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position='right'
          />
        </a>
      </div>
      <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Copyright © 2025 Abdulsamet Dursun
        </p>
        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map(profile => (
            <a
              key={profile.id}
              href={profile.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image
                src={profile.img}
                alt={String(profile.id) || 'Profile Image'}
                className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300'
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
