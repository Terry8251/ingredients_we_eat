'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../styles/index';
import { navVariants } from '../utils/motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useTranslations } from 'next-intl';

const Navbar = () => {

  const t = useTranslations('NavBarLabels');
  console.log('t', t);

  // const about = formatMessage({ id: 'navBar.menuLabels.about' });
  // const artificialIngredients = formatMessage({ id: 'navBar.menuLabels.artificialIngredients' });
  // const fruits = formatMessage({ id: 'navBar.menuLabels.fruits' });
  // const fungi = formatMessage({ id: 'navBar.menuLabels.fungi' });
  // const grains = formatMessage({ id: 'navBar.menuLabels.grains' });
  // const meats = formatMessage({ id: 'navBar.menuLabels.meats' });
  // const vegetables = formatMessage({ id: 'navBar.menuLabels.vegetables' });


  return (
    <nav
      // variants={navVariants}
      // initial="hidden"
      // whileInView="show"
      className={`${styles.xPaddings} backdrop-opacity-90 h-12 py-1 relative z-10 bg-gradient-to-b from-[#365b3c] to-[#89e899]`}
    >
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show" 
        className={`${styles.innerWidth} mx-auto flex justify-center items-center sm:gap-8 md:gap-8 lg:gap-20`}
      >
        <Link href={"/"}>
          <h2 className='w-max font-bold text-lg text-black'>It Matters!</h2>
        </Link>
        <ul className='hidden sm:flex md:gap-6 sm:text-xs md:text-xs lg:text-sm'>
          <li className='p-4'>
            <Link href='/About'>{t('about')}</Link>
          </li>
          <li className='p-4'>
            <Link href='/Meats'>Meats</Link>
          </li>
          <li className='p-4'>
            <Link href='/Fruits'>Fruits</Link>
          </li>
          <li className='p-4'>
            <Link href='/Vegetables'>Vegetables</Link>
          </li>
          <li className='p-4'>
            <Link href='/Grains'>Grains</Link>
          </li>
          <li className='p-4'>
            <Link href='/Fungi'>Fungi</Link>
          </li>
          <li className='p-4 flex w-max'>
            <Link href='/Artificial Ingredients'>Artificial Ingredients</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className='block sm:hidden z-20 relative left-[130px]'>
          <AiOutlineMenu size={20}/>
        </div>

        {/* Mobile Menu List */}

        <div className='sm:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen 
          bg-[#009900] text-center z-10 ease-in duration-300'
        >
          <ul >
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/About'>About</Link>
            </li>
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/Meats'>Meats</Link>
            </li>
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/Fruits'>Fruits</Link>
            </li>
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/Vegetables'>Vegetables</Link>
            </li>
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/Grains'>Grains</Link>
            </li>
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/Fungi'>Fungi</Link>
            </li>
            <li className='p-4 text-2xl hover:text-[#4D0026]'>
              <Link href='/Artificial Ingredients'>Artificial Ingredients</Link>
            </li>
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;

