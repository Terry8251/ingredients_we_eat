'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import styles from '../../styles/index';
import { staggerContainer, textVariant } from '../../utils/motion';
import artificialIngredients from '../../public/artificial_ingredients.jpg';

export default function Hero() {
  
  const [text, count] = useTypewriter({
    words: [
      "Nitrates & Nitrites",
      "Potassium Bromate", 
      "Titanium Dioxide",
      "BVO",
      "TBHQ",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section className={`${styles.yPaddings} flex flex-col items-center justify-center h-screen bg-fixed bg-center relative`}>
      <Image src={artificialIngredients} alt="artificial ingredients label" fill   />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-black via-slate-400/50 to-slate-50' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className='flex justify-center items-center flex-col relative z-[2]'>
          <motion.h1
            className='text-black font-bold text-xl tracking-wider md:text-6xl lg:text-7xl xl:text-7xl'
            variants={textVariant(1.1)}
          >
            Have you ever thought about
          </motion.h1>
          <motion.div
            className='flex flex-row justify-center items-center'
            variants={textVariant(1.2)}
          >
            <h1 className='text-black font-bold text-xl tracking-wider md:text-6xl lg:text-7xl xl:text-7xl'>the ingredients we all eat?</h1>
          </motion.div>
        </div>
        <div className='flex justify-center items-center flex-col relative z-[2] pt-10'>
          <h1 className='text-xl font-bold tracking-wider md:text-5xl lg:text-6xl xl:text-6xl'>
            <span className='text-[#4D0026]'>{text}</span>
            <Cursor cursorColor="#000000" />
          </h1>
        </div>
      </motion.div>
    </section>
  )
} 