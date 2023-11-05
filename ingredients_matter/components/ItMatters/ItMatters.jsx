'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';



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
          <div className='text-[#009900] text-7xl flex font-semibold mb-6'>
            {message('title')}
          </div>
          <div className='flex justify-end'>
            <div className='border-y-2 border-y-[#009900] font-light mb-4 pl-2 text-3xl text-[#009900] w-[40%]'>
                {message('subtitleOne')}
            </div>
          </div>
          <div>
            <div className='border-y-2 border-y-[#009900] font-light mt-4 pl-2 text-3xl text-[#009900] w-[40%]'>
              {message('subtitleTwo')}
            </div>
          </div>
          <div className='justify-center flex py-8'>
            <motion.div
              className='relative border-2 border-[#4D0026] bg-gradient-to-b from-[#4D0026] to-[#009900] flex items-center justify-center rounded-full w-56 h-56 md:w-[672px] md:h-[175px] md:top-1 lg:w-full lg:h-[250px]'
            >
              <motion.img
                className='md:mb-0 w-56 h-56 rounded-full object-cover md:w-[672px] md:h-[175px] md:top-1 lg:w-full lg:h-[250px]'
                  initial={{
                    opacity: 0, 
                    z: -1, 
                    }}
                  whileHover={{
                    opacity: 1,
                    z: 0,
                  }}
                  transition={{ duration: 1.2, }}
                  viewport={{ once: true }}
                  src='artificial_additives.jpg'
              />
              <div className='pointer-events-none flex font-bold justify-center items-center leading-5 w-2/3 absolute text-xs text-[#009900] text-center md:font-light md:leading-8 md:text-lg lg:leading-9 lg:text-3xl lg:w-3/4'>
                {message('statOne')}
              </div>
            </motion.div>
          </div>
          <div className='md:flex md:flex-row md:justify-evenly'>
            <div  className='pb-8 justify-center flex'>
              <motion.div
              className='relative border-2 border-[#4D0026] bg-gradient-to-b from-[#4D0026] to-[#009900] flex items-center justify-center rounded-full w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64'
              >
                <motion.img 
                  className='md:mb-0 w-56 h-56 rounded-full object-cover md:w-48 md:h-48 lg:w-64 lg:h-64'
                    initial={{
                      opacity: 0, 
                      z: -1, 
                      }}
                    whileHover={{
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{ duration: 1.2, }}
                    viewport={{ once: true }}
                    src='artificial_additives.jpg'
                />
                <div  className='pointer-events-none flex font-bold justify-center items-center leading-5 w-2/3 absolute text-xs text-[#009900] text-center'>
                  {message('statTwo')}
                </div>
              </motion.div>
            </div>
            <div className='pb-8 justify-center flex'>
              <motion.div
              className='relative border-2 border-[#4D0026] bg-gradient-to-b from-[#4D0026] to-[#009900] flex items-center justify-center rounded-full w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64'
              >
                <motion.img
                  className='md:mb-0 w-56 h-56 rounded-full object-cover md:w-48 md:h-48 lg:w-64 lg:h-64'
                    initial={{
                      opacity: 0, 
                      z: -1, 
                      }}
                    whileHover={{
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{ duration: 1.2, }}
                    viewport={{ once: true }}
                    src='artificial_additives.jpg'
                />
                <div  className='pointer-events-none flex font-bold justify-center items-center leading-5 w-2/3 absolute text-xs text-[#009900] text-center'>
                  {message('statThree')}
                </div>
              </motion.div>
            </div>
            <div className='justify-center flex'>
              <motion.div
              className='relative border-2 border-[#4D0026] bg-gradient-to-b from-[#4D0026] to-[#009900] flex items-center justify-center rounded-full w-56 h-56 md:w-48 md:h-48 lg:w-64 lg:h-64'
              >
                <motion.img
                  className='md:mb-0 w-56 h-56 rounded-full object-cover md:w-48 md:h-48 lg:w-64 lg:h-64'
                    initial={{
                      opacity: 0, 
                      z: -1, 
                      }}
                    whileHover={{
                      opacity: 1,
                      z: 0,
                    }}
                    transition={{ duration: 1.2, }}
                    viewport={{ once: true }}
                    src='artificial_additives.jpg'
                />
                <div  className='pointer-events-none flex font-bold justify-center items-center leading-5 w-2/3 absolute text-xs text-[#009900] text-center'>
                  {message('statFour')}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  )
}