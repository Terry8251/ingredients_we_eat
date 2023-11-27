'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import artificialAdditives from '../../public/artificial_additives_2.jpg'



export default function ItMatters() {

  const ef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ef,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);


  const message = useTranslations('AdditivesPage')

  return (
    <div className='bg-gradient-to-b from-black via-[#009900] to-black'>
      <motion.div
        ref={ef} 
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
        className='relative overflow-visible bg-center flex flex-col items-center'
      >
        <section
          className='w-full m-5 p-11'
        >
          <div className='text-white text-7xl flex font-semibold mb-6'>
            {message('title')}
          </div>
          <div className='flex justify-end'>
            <div className='text-center font-light mb-4 pl-2 text-3xl text-white'>
                {message('subtitle')}
            </div>
          </div>
        </section>
      </motion.div>
      <div className='justify-center flex pb-8 w-full'>
        <motion.div
          className='relative flex items-center flex-col md:flex-end md:flex-row'
        >
          <Image
            className='pb-10 w-full md:w-1/2 md:mb-0 lg:w-3/4'
            width="0"
            height="0"
            src={artificialAdditives}
          />
          <div className='flex font-bold justify-center items-center leading-9 w-1/2 text-2xl text-white text-center md:font-bold md:leading-[3rem] md:text-4xl lg:leading-[3rem] lg:text-4xl lg:w-3/4'>
            {message('statOne')}
          </div>
        </motion.div>
      </div>
      <div className='justify-center flex pb-8 w-full'>
        <motion.div
          className='relative flex items-center flex-col md:flex-end md:flex-row'
          ref={ef} 
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <div className='flex font-bold justify-center items-center leading-9 pb-8 w-1/2 text-2xl text-white text-center md:font-bold md:leading-[2rem] md:text-lg md:pr-2 md:pl-2.5'>
              {message('statTwo')}
          </div>
          <div  className='flex font-bold justify-center items-center leading-9 pb-8 w-1/2 text-2xl text-white text-center md:font-bold md:leading-[2rem] md:text-lg md:px-2'>
            {message('statThree')}
          </div>
          <div  className='flex font-bold justify-center items-center leading-9 w-1/2 text-2xl text-white text-center md:font-bold md:leading-[2rem] md:text-lg md:pr-2.5 md:pl-2'>
            {message('statFour')}
          </div>
        </motion.div>
      </div>
    </div>
  )
}