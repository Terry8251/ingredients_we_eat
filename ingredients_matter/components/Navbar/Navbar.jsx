'use client'

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { color, motion } from 'framer-motion';
import Link from 'next/link';
import styles from '../../styles/index';
import { navVariants } from '../../utils/motion';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NavbarList } from './NavbarList';

const Navbar = () => {

  const t = useTranslations('NavBarLabels');

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [navColor, setNavColor] = useState('#000000');
  const [textColor, setTextColor] = useState('#FFFFFF');

  useEffect(() => {
    const changeNav = () => {
      if (window.scrollY >= 500) {
        setNavColor('#000000');
        setTextColor('#FFFFFF');
      } else {
        setNavColor('#000000');
        setTextColor('#FFFFFF');
      }
    };
    window.addEventListener('scroll', changeNav);
  }, [textColor]);


  const handleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  } 

  return (
    <nav
      style={{ backgroundColor: `${navColor}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300 border-b border-t-0 border-white'
    >
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show" 
        className={`${styles.innerWidth} mx-auto flex justify-center items-center sm:gap-8 md:gap-8 lg:gap-20`}
      >
        <Link href={"/"}>
          <h2 style={{ color: `${textColor}` }} className='w-max font-bold text-lg'>It Matters!</h2>
        </Link>
        <ul
         style={{ color: `${textColor}` }}
         className='hidden md:flex sm:text-xs lg:text-sm'
        >
          {NavbarList.map((items) => {
            return (
              <motion.li key={items.id} whileHover={{ scale: 1.2, originX: 0 }} className='p-4'>
                <Link href={items.path}>{items.title}</Link>
              </motion.li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleMobileMenu} className='block md:hidden z-20 relative left-[130px]'>
          {isMobileOpen ? <AiOutlineClose size={20} style={{ color: `${textColor}` }} /> : <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />}
        </div>

        {/* Mobile Menu List */}

        <div className={isMobileOpen ? 'md:hidden absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center w-full h-screen bg-black text-center z-10 ease-in duration-300' : 'md:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center z-10 ease-in duration-300'}>
          <ul>
            {NavbarList.map((items) => {
              return (
                <li key={items.id} className='p-4 text-2xl text-[#009900]'>
                  <Link href={items.path}>{items.title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;

