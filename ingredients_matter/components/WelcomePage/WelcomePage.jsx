'use client'
import { useRef } from 'react';
import Image from 'next/image';
import { 
  motion,  
  useScroll, 
  useTransform, 
} from 'framer-motion';
import { useTranslations } from 'next-intl';
import fruitsVegetables from '../../public/fruit_veg.jpg'
import Link from 'next/link';
import { slideIn, staggerContainer } from '@/utils/motion';

export default function WelcomePage() {

  const messages = useTranslations('WelcomePage');

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className='bg-gradient-to-b from-black via-[#009900] to-[#1721E6]/100 overflow-x-hidden py-28'>
      <motion.div  
        className='flex font-black flex-col justify-center items-start relative pb-10 text-white text-3xl w-full md:text-4xl lg:text-7xl'
        ref={ref} 
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        {messages('title')}
      </motion.div>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.6 }} 
        className='relative flex flex-col items-center md:justify-between md:flex-row'
      >
        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1.25)}
          className='flex relative justify-center pb-10 md:pb-0 md:justify-start md:pl-[166px]'
        >
          <Link href={"/About"}>
            <motion.button
              whileHover={{
                scale: 1.1, 
                textShadow: "0px 0px 8px rgb(77, 0, 38)",
                boxShadow: "0px 0px 8px rgb(77, 0, 38)",
              }}
              className='bg-white h-[40px] rounded-full text-[#4D0026] w-[135px]'
            >
              {messages('button')}
            </motion.button>
          </Link>
        </motion.div>
        <motion.div className='relative w-full pb-10 md:w-1/2' variants={slideIn('right', 'tween', 0.2, 1.25)}>
          <Image
            src={fruitsVegetables} 
            alt="fruits_and_veggies_market" 
            width="0"
            height="0"
            className='opacity-75 bg-fixed shadow-[60px_px_60px_black] w-full'
          />
        </motion.div>
      </motion.div>
      <motion.div 
        className='flex font-black flex-col justify-center items-end pr-10 relative text-white text-3xl w-full md:text-6xl lg:text-7xl'
        ref={ref} 
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
      {messages('title2')}
      </motion.div>
    </div>
  )
}