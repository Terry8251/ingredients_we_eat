'use client'

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import steakImage from '../../public/steak.png';
import vegetablesImage from '../../public/vegetables.png';
import fruitsImage from '../../public/fruits.png';
import breadsImage from '../../public/bread.png';
import fungusImage from '../../public/Enoki mushrooms.jpg';
import artificialImage from '../../public/artificial_additives_2.jpg';



const WholeFoods = () => {

  const wholeFoodMessage = useTranslations('WholeFoodsPage')

  return (
    <main
     className='p-10'
    >
      <div className="flex flex-row">
        <div className="border-2 border-black flex flex-col w-full">
          <div className="border-4 border-red-500 flex flex-col py-5 md:flex-row md:items-center">
            <div className='flex justify-center items-center rounded-sm md:flex-none'>
              <Image className='rounded-full w-96 h-96 md:rounded-sm md:w-52 md:h-36' src={vegetablesImage} />
            </div>
            <div className='hidden md:flex md:flex-grow'>
              <h2 className='text-white text-2xl'>{wholeFoodMessage('vegetableTitle')}</h2>
            </div>
          </div>
          <div className="border-4 border-red-500 flex flex-col py-5 md:flex-row md:items-center">
            <div className='flex justify-center items-center rounded-sm md:flex-none'>
              <Image className='rounded-full w-96 h-96 md:rounded-sm md:w-52 md:h-36' src={fruitsImage} />
            </div>
            <div className='hidden md:flex md:flex-grow'>
              <h2 className='text-white text-2xl'>{wholeFoodMessage('fruitTitle')}</h2>
            </div>
          </div>
          <div className="border-4 border-red-500 flex flex-col py-5 md:flex-row md:items-center">
            <div className='flex justify-center items-center rounded-sm md:flex-none'>
              <Image className='rounded-full w-96 h-96 md:rounded-sm md:w-52 md:h-36' src={steakImage} />
            </div>
            <div className='hidden md:flex md:flex-grow'>
              <h2 className='text-white text-2xl'>{wholeFoodMessage('meatsTitle')}</h2>
            </div>
          </div>
          <div className="border-4 border-red-500 flex flex-col py-5 md:flex-row md:items-center">
            <div className='flex justify-center items-center rounded-sm md:flex-none'>
              <Image className='rounded-full w-96 h-96 md:rounded-sm md:w-52 md:h-36' src={fungusImage} />
            </div>
            <div className='hidden md:flex md:flex-grow'>
              <h2 className='text-white text-2xl'>{wholeFoodMessage('fungiTitle')}</h2>
            </div>
          </div>
          <div className="border-4 border-red-500 flex flex-col py-5 md:flex-row md:items-center">
            <div className='flex justify-center items-center rounded-sm md:flex-none'>
              <Image className='rounded-full w-96 h-96 md:rounded-sm md:w-52 md:h-36' src={breadsImage} />
            </div>
            <div className='hidden md:flex md:flex-grow'>
              <h2 className='text-white text-2xl'>{wholeFoodMessage('grainsTitle')}</h2>
            </div>
          </div>
          <div className="border-4 border-red-500 flex flex-col py-5 md:flex-row md:items-center">
            <div className='flex justify-center items-center rounded-sm md:flex-none'>
              <Image className='rounded-full w-96 h-96 md:rounded-sm md:w-52 md:h-36' src={artificialImage} />
            </div>
            <div className='hidden md:flex md:flex-grow'>
              <h2 className='text-white text-2xl'>{wholeFoodMessage('artificialTitle')}</h2>
            </div>
          </div>
        </div>
        <div className="border-2 border-green-500 flex flex-col w-full">
          yay more food
        </div>
      </div>

    </main>
  )
}

export default WholeFoods