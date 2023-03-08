'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/index';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-2 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <Link href={"/"}>
        <h1 className='font-bold text-xs text-black'>Home</h1>
      </Link>
      <h2 className='font-bold text-[24] text-black'>It Matter</h2>
      <Image
      src="/menu.svg"
      alt="menu"
      width={24}
      height={24}
      />
    </div>
  </motion.nav>
);

export default Navbar;

