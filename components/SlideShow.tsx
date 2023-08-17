'use client'

import Image from 'next/image'
//These are Third party packages for smooth slideshow
import { Zoom } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Slideshow = () => {
  //Array of Images
  const images = [
    '/images/orca.jpg',
    '/images/bear.jpg',
    '/images/lion.jpg',
    '/images/croc.jpg',
  ]

  //These are custom properties for zoom effect while slide-show
  const zoomInProperties = {
    scale: 1,
    duration: 3000,
    transitionDuration: 300,
    infinite: true,
    prevArrow: (
      <div className='hidden'>
        <ArrowLeftIcon className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
    nextArrow: (
      <div className='hidden'>
        <ArrowRightIcon className='h-8 w-8 text-white cursor-pointer' />
      </div>
    ),
  }
  return (
    <div className='w-full h-screen'>
      <Zoom {...zoomInProperties}>
        {images.map((each, index) => (
          <div
            key={index}
            className='flex justify-center md:items-center items-center w-screen h-screen relative'
          >
            <Image
              className='w-screen h-screen'
              src={each}
              alt='hero'
              fill
              objectFit='cover'
            />
            <div className='flex flex-col items-center justify-center absolute gap-2'>
              <h1 className='   md:text-6xl text-4xl bold text-white'>
                Animal Kingdom
              </h1>
              <p className='   md:text-2xl text-xl bold text-white'>
                "Everything you watch is real."
              </p>
              <form className='w-full max-w-sm mt-5'>
                <div className='flex items-center border-b border-teal-500 py-2'>
                  <input
                    className='appearance-none bg-transparent border-none w-full text-white mr-3 py-1 px-2 leading-tight focus:outline-none'
                    type='text'
                    placeholder='Email...'
                    aria-label='Email'
                  />
                  <button
                    className='flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded'
                    type='button'
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  )
}

export default Slideshow
