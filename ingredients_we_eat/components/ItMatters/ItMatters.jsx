'use client'

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import artificialAdditives from '../../public/artificial_additives_2.jpg';
import glyphosateImage from '../../public/glyphosate.png';

export default function ItMatters() {

  const [isMobileText, setIsMobileText] = useState(false);

  const handleMobileText = () => {
    setIsMobileText(!isMobileText);
  } 

  const message = useTranslations('AdditivesPage')

  return (
    <main className='bg-blue-100 flex flex-col p-10'>
      <div className='flex flex-col md:flex-row md:w-full'>
        <div className='flex rounded-lg mb-3 md:mb-0 md:mr-3 md:w-1/2'>
          <Image
            className='rounded-3xl w-full h-auto'
            src={artificialAdditives}
          />
        </div>
        <div className='bg-white overflow-hidden rounded-3xl mt-3 md:mt-0 md:ml-3 md:w-1/2'>
          <div className='font-bold pt-8 px-8 text-xl'>
            {message('headingTitle')}
          </div>
          <div className='pt-8 px-8 text-base'>
            {message('paragraph')}
          </div>
          <div className='flex justify-end mb-4 pr-20 md:mb-0 md:pr-24'>
            <Link href="/foodiesJourney">
              <button 
              className='bg-green-900 hover:bg-green-800 py-2 px-4 text-white font-bold rounded-full'
              >
                {message('buttonText')}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='flex flex-col my-4 md:flex-row md:w-full'>
        <div className='bg-white overflow-hidden rounded-3xl my-3 md:my-0 md:mr-3 md:w-1/2'>
          <div className='font-bold pt-8 px-8 text-xl'>
            {message('findOutTitle')}
          </div>
          <div className='pt-8 px-8 text-base'>
            {message('findOutParagraph')}
          </div>
          <div className='flex justify-end my-4 pr-20 md:mb-5 md:pr-24'>
            <Link href="/findOutMore">
              <button 
                className='bg-green-900 hover:bg-green-800 py-2 px-4 text-white font-bold rounded-full'
              >
                {message('buttonText')}
              </button>
            </Link>
          </div>
        </div>
        <div className='flex rounded-lg my-3 md:my-0 md:ml-3 md:w-1/2'>
          <Image
            className='rounded-3xl w-full h-auto'
            src={glyphosateImage}
          />
        </div>
      </div>
      <div className='flex flex-col justify-between md:flex-row md:w-full'>
        <div className='flex flex-col group my-5 rounded-3xl md:flex-row md:w-96 md:h-96'>
          <div className='relative overflow-hidden rounded-3xl'>
            <img className='w-full h-full object-cover rounded-3xl' src={'pesticide.png'} alt='no pesticide sign'/>
            <div className='absolute h-full w-full items-end flex bg-black/60 text-white bottom-0 left-0 rounded-3xl translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
            <div className='p-4'>
              <p className='text-sm'>{message('pesticidesOverlay')}</p>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-col group my-5 rounded-3xl md:flex-row md:w-96 md:h-96'>
          <div className='relative overflow-hidden rounded-3xl'>
            <img className='w-full h-full object-cover rounded-3xl' src={'rotten_leaf.jpg'} alt='no pesticide sign'/>
            <div className='absolute h-full w-full items-end flex bg-black/60 text-white bottom-0 left-0 rounded-3xl translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
            <div className='p-4'>
              <p className='text-sm'>{message('foodRecalls')}</p>
              <div className='flex justify-center my-2'>
                <Link href='https://www.fda.gov/safety/recalls-market-withdrawals-safety-alerts'> 
                  <button className='bg-green-900/60 hover:bg-white/50 py-2 px-4 text-white font-bold rounded-full w-36'>
                    {message('recallBtn')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
        <div className='flex flex-col group my-5 rounded-3xl md:flex-row md:w-96 md:h-96'>
          <div className='relative overflow-hidden rounded-3xl'>
            <img className='w-full h-full object-cover rounded-3xl' src={'tap_water.jpg'} alt='no pesticide sign'/>
            <div className='absolute h-full w-full items-end flex bg-black/60 text-white bottom-0 left-0 rounded-3xl translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-1000'>
            <div className='p-4'>
              <p className='text-sm'>{message('waterSafetyNews')}</p>
              <div className='flex justify-center my-2'>
                <Link href='https://www.usgs.gov/news/national-news-release/tap-water-study-detects-pfas-forever-chemicals-across-us'> 
                  <button className='bg-green-900/60 hover:bg-white/50 py-2 px-4 text-white font-bold rounded-full w-36'>
                    {message('waterBtn')}
                  </button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
  )
}