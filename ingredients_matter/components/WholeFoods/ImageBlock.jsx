'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { useTranslations } from "next-intl"
import salmonFillet from "../../public/salmon_fillet.png"
import veggies from "../../public/vegetables.png"
import fruitBowl from "../../public/fruits.png"
import freshBread from "../../public/bread.png"
import steak from "../../public/steak.png"


const ImageBlock = (props) => {
  const {
    variants,
    widthSize,
  } = props;

  const [width, setWidth] = useState(0);

  const carousel = useRef();

  useEffect(() => {
    const scrollWidth = carousel.current.scrollWidth;
    const offsetWidth = carousel.current.offsetWidth;
    setWidth(scrollWidth - offsetWidth);
  }, [width]);

  const messages = useTranslations('WholeFoodsPage');

  const imageCard = [
    {
      "id": 1,
      "src": salmonFillet,
      "message": messages('bulletPoint1'),
    },
    {
      "id": 2,
      "src": veggies,
      "message": messages('bulletPoint2'),
    },
    {
      "id": 1,
      "src": fruitBowl,
      "message": messages('bulletPoint3'),
    },
    {
      "id": 1,
      "src": freshBread,
      "message": messages('bulletPoint4'),
    },
    {
      "id": 1,
      "src": steak,
      "message": messages('bulletPoint5'),
    },
  ]

  return (
    <motion.div
      ref={carousel}
      className='overflow-hidden my-0 md:mr-[5%]'
      variants={variants}
    >
      {widthSize > 500 ? (
      <motion.div
        drag="x" 
        dragConstraints={{ right: 0, left: -width }} 
        className='flex flex-col md:flex-row'
      >
        {imageCard.map(image => {
          return (
            <div>
              <motion.div key={image.id} className='w-full md:p-[18px] md:min-h-[30rem] md:min-w-[20rem]'>
                <Image 
                  className='pointer-events-none pb-10 w-3/4 md:pb-0 md:w-full md:h-full'
                  src={image.src} 
                  alt="food pictures" 
                  style={{ width: '100%', height: '100%' }}
                />
              </motion.div>
              <motion.div 
                className='font-bold px-[40px] leading-9 text-2xl text-black text-center w-3/4 md:font-bold md:leading-[2rem] md:text-lg md:min-w-[20rem] '
              >
                {image.message}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      ) : (
      <motion.div 
        className='flex flex-col md:flex-row'
      >
        {imageCard.map(image => {
          return (
            <div>
              <motion.div key={image.id} className='w-full md:p-[40px] md:min-h-[30rem] md:min-w-[20rem]'>
                <Image 
                  className='pointer-events-none py-10 w-3/4 md:pb-0 md:w-full md:h-full'
                  src={image.src} 
                  alt="food pictures" 
                  style={{ width: '100%', height: '100%' }}
                />
              </motion.div>
              <motion.div 
                className='font-bold px-[40px] leading-9 text-2xl text-black text-center w-full md:font-bold md:leading-[2rem] md:text-lg md:min-w-[20rem] '
              >
                {image.message}
              </motion.div>
            </div>
          );
        })}
      </motion.div>
      )}
    </motion.div>
  )
}

export default ImageBlock