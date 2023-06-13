'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from '../../styles/index';
import { staggerContainer, textVariant } from '../../utils/motion';
// import SideEffects from '../SideEffects';
import artificialIngredients from '../../public/artificial_ingredients.jpg';

export default function Hero() {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center relative'>
      <Image src={artificialIngredients} alt="artificial ingredients label" fill   />
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-[#009900]/40 z-[2]' />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div
          className='flex justify-center items-center flex-col relative z-[2]'
        >
          <motion.h1
            className='text-white sm:text-xl md:text-4xl xl:text-5xl'
            variants={textVariant(1.1)}
          >
            Have you ever thought about
          </motion.h1>
          <motion.div
            className='flex flex-row justify-center items-center'
            variants={textVariant(1.2)}
          >
            <h1 className='text-white sm:text-xl md:text-4xl xl:text-5xl'>the ingredients you eat?</h1>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
} 