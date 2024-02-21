'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Icons from './Icons';
import homeKitchen from '../../public/home_cooking.png';
import breadLoafImg from '../../public/bread.png';
import salmonFilletImg from '../../public/salmon_fillet.png';
import fruitsImg from '../../public/fruits.png';
import readMeatImg from '../../public/steak.png';
import fungiImg from '../../public/enoki_mushrooms.jpg';
import spicesImg from '../../public/spices.jpg';
import vegetablesImg from '../../public/vegetables.png';
import whiteMeatImg from '../../public/chicken.jpg';


const WholeFoods = () => {

  const imageSrc = [
    {
      id: 1,
      alt: 'bread-loaf',
      src: breadLoafImg,
      href: 'wholeFoods/grains',
      text: 'Grains'
    },
    {
      id: 2,
      alt: 'salmon-fillet',
      src: salmonFilletImg,
      href: 'wholeFoods/seafoods',
      text: 'Fish'
    },
    {
      id: 3,
      alt: 'fruits-image',
      src: fruitsImg,
      href: 'wholeFoods/fruits',
      text: 'Fruits'
    },
    {
      id: 4,
      alt: 'steak-image',
      src: readMeatImg,
      href: 'wholeFoods/redMeats',
      text: 'Red meats'
    },
    {
      id: 5,
      alt: 'enoki-mushrooms',
      src: fungiImg,
      href: 'wholeFoods/fungi',
      text: 'Fungi'
    },
    {
      id: 6,
      alt: 'spices-image',
      src: spicesImg,
      href: 'wholeFoods/spices',
      text: 'Spices'
    },
    {
      id: 7,
      alt: 'vegetables-image',
      src: vegetablesImg,
      href: 'wholeFoods/vegetables',
      text: 'Vegetables'
    },
    {
      id: 8,
      alt: 'chicken-breast-fillets',
      src: whiteMeatImg,
      href: 'wholeFoods/whiteMeats',
      text: 'White meats'
    },
  ];

  const wholeFoodMessage = useTranslations('WholeFoodsPage')

  return (
    <section className="bg-blue-100 flex min-h-screen">
      <div className='flex flex-col px-10 w-full'>
        <div className='relative mb-4 rounded-3xl w-full'>
          <Image src={homeKitchen} alt='Image of Kitchen' className='rounded-3xl w-full h-full object-cover' />
            <div className="absolute inset-x-0 bottom-0 bg-green-900/60 hover:bg-green-700/50 rounded-b-3xl text-white text-center p-4">
              <Link href="/wholeFoods">
                <div className="text-lg font-bold">{wholeFoodMessage('wholeFoodsTitle')}</div>
              </Link>
            </div>
        </div>
        <div className='flex flex-col justify-around items-center mt-4 w-full md:flex-row'>
          {imageSrc.map((img) => 
            img.id <= 4 &&  (
              <div className='flex items-center justify-center relative my-5 w-full h-48 md:w-72'>
                <Image
                  className='rounded-3xl w-full h-full object-cover'
                  alt={img.alt}
                  src={img.src} 
                />
                <Link className='absolute' href={img.href}>
                  <button className='bg-white/70 hover:bg-white/50 py-2 px-4 text-green-800 font-bold rounded-full w-36'>
                    {img.text}
                  </button>
                </Link>
              </div>
            )
          )}
        </div>
        <div className='flex flex-col justify-around items-center mt-4 w-full md:flex-row'>
          {imageSrc.map((img) => 
            img.id >= 5 &&  (
              <div className='flex items-center justify-center relative my-5 w-full h-48 md:w-72'>
                <Image
                  className='rounded-3xl w-full h-full object-cover'
                  alt={img.alt}
                  src={img.src} 
                />
                <Link className='absolute' href={img.href}>
                  <button className='bg-white/70 hover:bg-white/50 py-2 px-4 text-green-800 font-bold rounded-full w-36'>
                    {img.text}
                  </button>
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

export default WholeFoods