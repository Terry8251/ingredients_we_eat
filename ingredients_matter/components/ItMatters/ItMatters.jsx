'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import artificialAdditives from '../../public/artificial_additives_2.jpg';
import glyphosateImage from '../../public/glyphosate.png';
import pesticideImage from '../../public/pesticide.png';

export default function ItMatters() {

  const [isMobileText, setIsMobileText] = useState(false);

  const handleMobileText = () => {
    setIsMobileText(!isMobileText);
  } 


  const message = useTranslations('AdditivesPage')

  return (
    <main className='bg-slate-50 flex flex-col p-10 md:flex-row'>
      <div className='flex flex-col justify-center items-center md:w-full'>
          <Image
            className='rounded-sm w-full h-auto'
            src={artificialAdditives}
          />
          <div>
          <h4 className='text-blac py-5'>{message('headingTitle')}</h4>
          <Link href="/foodiesJourney">
            <div className='text-black whitespace-pre-line text-4xl'>{message('mainTitle')}</div>
          </Link>
          </div>
      </div>
      <div className='md:ml-5 md:w-full'>
          <h4 className='py-5 text-black'>{message('findOutMore')}</h4>
          <article className='flex flex-col justify-center'>
            <Link href="/findOutMore">
              <div className='flex py-5 flex-row md:items-center'>
                <div className='flex flex-grow'>
                  <h2 className='text-lg text-black md:text-2xl'>{message('findOutTitle')}</h2>
                </div>
                <div className='flex justify-center items-center rounded-sm flex-none'>
                  <Image className='rounded-sm w-52 h-36' src={glyphosateImage} />
                </div>
              </div>
            </Link>
            <Link href="/findOutMore/chlorpyrifos">
              <div className='flex py-5 flex-row md:items-center'>
                <div className='flex flex-grow'>
                  <h2 className='text-lg text-black md:text-2xl'>{message('chlorpyrifosTitle')}</h2>
                </div>
                <div className='flex justify-center items-center md:rounded-sm flex-none'>
                  <Image className='rounded-sm w-52 h-36' src={pesticideImage} />
                </div>
              </div>
            </Link>
          </article>
      </div>
    </main>
  )
}