'use client'
import { motion } from 'framer-motion';
import styles from '../styles/index';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

export default function Hero() {
  return (
    <section className={`${styles.yPaddings} sm:pl-8 pl-6 text-white`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col mx-auto`}
      >
        <div className='flex justify-center items-center flex-col relative z-10'>
          <motion.h1 className="font-bold py-4" variants={textVariant(1.1)}>
            High Fructose Corn Syrup
          </motion.h1>
          <motion.h1 className="font-bold py-4" variants={textVariant(1.2)}>
            Sodium Benzoate
          </motion.h1>
          <motion.h1 className="font-bold py-4 text-gray-200" variants={textVariant(1.3)}>
            Artificial Sweeteners
          </motion.h1>
          <motion.h1 className="font-bold py-4 text-gray-300" variants={textVariant(1.4)}>
            Sodium Nitrates and Nitrites
          </motion.h1>
          <motion.h1 className="font-bold py-4 text-gray-400" variants={textVariant(1.5)}>
            Artificial Dyes
          </motion.h1>
          <motion.h1 className="font-bold py-4 text-gray-500" variants={textVariant(1.6)}>
            Butylated Hydroxyanisole and Hydroxtoluene
          </motion.h1>
          <motion.h1 className="font-bold pt-4 text-gray-600" variants={textVariant(1.7)}>
            Partially Hydrogenated Oils / Trans Fats
          </motion.h1>
        </div>
        <div>
          <motion.h4
            className={`${styles.xPaddings} absolute font-bold text-secondary top-[132px] md:top-[112px] text-xs sm:text-base`} 
            variants={slideIn('right', 'tween', 2.0, 3)}
          >
            Type 2 Diabetes
          </motion.h4>
          <motion.h4
            className={`${styles.xPaddings} absolute font-bold left-[427px] lg:left-[700px] md:left-[307px] text-secondary text-xs sm:text-base top-[182px]`} 
            variants={slideIn('left', 'tween', 2.2, 3)}
          >
            Obesity
          </motion.h4>
          <motion.h4
            className={`${styles.xPaddings} absolute font-bold text-xs sm:text-base text-secondary lg:left-[100px] top-[244px]`} 
            variants={slideIn('right', 'tween', 2.0, 3)}
          >
            Cardiovascular Disease
          </motion.h4>
          <motion.h4
            className={`${styles.xPaddings} absolute font-bold left-[300px] md:left-[183px] lg:left-[650px] text-xs sm:text-base text-secondary top-[310px]`} 
            variants={slideIn('left', 'tween', 2.2, 3)}
          >
            Respiratory Tract Irritation
          </motion.h4>
          <motion.h4
            className={`${styles.xPaddings} absolute font-bold text-xs sm:text-base text-secondary lg:left-[60px] top-[350px]`} 
            variants={slideIn('right', 'tween', 2.0, 3)}
          >
            Increased Blood Pressure
          </motion.h4>
          <motion.h4
            className={`${styles.xPaddings} absolute font-bold left-[350px] md:left-[250px] lg:left-[700px] text-xs sm:text-base text-secondary top-[420px]`} 
            variants={slideIn('left', 'tween', 2.2, 3)}
          >
            Cell Damage
          </motion.h4>
        </div>
      </motion.div>
    </section>
  )
} 