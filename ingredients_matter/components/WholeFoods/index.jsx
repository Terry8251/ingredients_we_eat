'use client'
import Reac, { useRef } from 'react'
import { useTranslations } from 'next-intl';
import styles from '../../styles/index';
import { motion, useScroll, useTransform } from 'framer-motion';
import { textVariant, slideIn, staggerContainer } from '../../utils/motion';
import ImageBlock from './ImageBlock';


const WholeFoods = () => {

  const messages = useTranslations('WholeFoodsPage');

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <div className='flex flex-row bg-gradient-to-b from-[#1721E6]/100 to-white'>
      <div className='flex flex-row m-[0px 10px 0px 20px]'>
        <div className='m-2.5 w-auto'>
          <ImageBlock
            id='salmon_fillet_small.png'
          />
        </div>
        <div className='m-2.5 w-auto'>
          <ImageBlock
            id='veggies.png'
          />
        </div>
      </div>
      <div className='leading-9 relative text-center text-6xl'>
        {messages('bulletPoint1')}
      </div>
    </div>
  )
}

export default WholeFoods


{/* <motion.div
variants={staggerContainer}
initial="hidden"
whileInView="show"
viewport={{ once: false, amount: 0.6 }}
>
<motion.div 
  className='flex left-[4.25rem] relative w-max'
  variants={slideIn('right', 'tween', 0.2, 1.25)}
>
  <ImageBlock
    id='salmon_fillet_small.png'
  />
</motion.div>
<div
  className='bottom-[230px] flex left-[40%] leading-9 relative text-center text-2xl w-[30%]'
>
  {messages('bulletPoint1')}
</div>
<motion.div 
  className='bottom-[18rem] flex left-[42.5rem] relative w-max lg:left-[60.5rem]'
  variants={slideIn('left', 'tween', 0.2, 1.25)}
>
  <ImageBlock
    id='veggies.png'
  />
</motion.div>
<div
  className='bottom-[24rem] flex left-[40%] leading-9 relative text-center text-2xl w-[30%]'
>
  {messages('bulletPoint2')}
</div>
<div className='bottom-[19rem] flex left-[4.25rem] relative w-max'>
  <ImageBlock
    id='fruit_bowl.png'
  />
</div>
<div
  className='bottom-[35rem] flex left-[40%] leading-9 relative text-center text-2xl w-[30%]'
>
  {messages('bulletPoint3')}
</div>
<div className='bottom-[31rem] flex left-[60.5rem] relative w-max'>
  <ImageBlock
    id='tomahawk_steak.png'
  />
</div>
<div
  className='bottom-[45rem] flex left-[40%] leading-9 relative text-center text-2xl w-[30%]'
>
  {messages('bulletPoint4')}
</div>
<div className='bottom-[42rem] flex left-[4.25rem] relative w-max'>
  <ImageBlock
    id='fresh_bread.png'
  />
</div>
<div
  className='bottom-[54rem] flex left-[40%] leading-9 relative text-center text-2xl w-[30%]'
>
  {messages('bulletPoint5')}
</div>
</motion.div> */}