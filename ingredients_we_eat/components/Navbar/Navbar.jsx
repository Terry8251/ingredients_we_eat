'use client'

import { useState } from 'react';
import Link from 'next/link';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { NAV_LINKS } from '../../constants/index';

const Navbar = () => {

  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  } 

  return (
    <nav
      className='flex justify-around relative z-10 py-2 ease-in duration-300 bg-black'
    >
        <Link href={"/"}>
          <h2 className='w-max font-bold text-white text-lg'>It Matters!</h2>
        </Link>
        <ul className='hidden gap-12 text-white md:flex'>
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className='cursor-pointer pb-1.5 sm:text-xs lg:text-sm hover:font-bold'>
              {link.label}
            </Link>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div onClick={handleMobileMenu} className='block text-white md:hidden z-20 relative'>
          {isMobileOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Menu List */}

        <div className={isMobileOpen ? 'sm:hidden absolute flex gap-y-8 justify-center items-center w-full h-screen bg-black text-center z-10 ease-in duration-300' : 'md:hidden absolute top-0 right-0 bottom-0 left-[-100%] flex justify-center items-center w-full h-screen bg-black text-center z-10 ease-in duration-300'}>
          <ul className='gap-y-8'>
          {NAV_LINKS.map((link) => (
            <li key={link.key} className='flex justify-center gap-8'>
              <Link href={link.href} className='p-4 text-2xl text-[#009900]'>
                {link.label}
              </Link>
            </li>
          ))}
          </ul>
        </div>
    </nav>
  );
}

export default Navbar;

