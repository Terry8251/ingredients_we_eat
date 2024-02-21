'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslations } from 'next-intl';
import logo from '../../public/ingredients_we_eat_green_logo.png'
import { FOOTER_LINKS, FOOTER_CONTACT_INFO, SOCIALS } from '../../constants/index'

const Footer = () => {

  const footerMessage = useTranslations('Footer')

  return (
    <footer className='bg-blue-100 flex flex-col items-center justify-center py-16'>
      <div className='w-full mb-10'>
        <iframe className='bg-blue-300 border-2 rounded-3xl border-[#E5E7EB] m-0 w-full h-[320px]' src="https://embeds.beehiiv.com/a3493b66-6ae6-445b-beef-e7b324180eef" data-test-id="beehiiv-embed"></iframe>
      </div>
      <div className='flex flex-col gap-14 mx-auto max-w-[1440px] mt-10 px-6 w-full lg:px-20 3xl:px-0'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href='/' className='mb-10'>
            <Image src={logo} alt="ingredients-we-eat-logo" width={160} height={35} />
          </Link>
          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1 md:mt-3.5'>
            {FOOTER_LINKS.map((columns) => (
              <div className='flex flex-col gap-5'>
                <h4 className='font-semibold whitespace-nowrap'>{columns.title}</h4>
                <ul className='flex flex-col gap-4 text-base text-gray-30'>
                  {columns.links.map((link) => (
                    <Link className='text-[13px]' href="/" key={link}>{link}</Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className='flex flex-wrap gap-10 mt-5 sm:justify-between md:flex-1 md:mt-3.5'>
            {FOOTER_CONTACT_INFO.map((contact) => (
              <div className='flex flex-col gap-5'>
                <h4 className='font-semibold whitespace-nowrap'>{contact.title}</h4>
                <ul className='flex flex-col gap-1 text-base text-gray-30'>
                  <Link className='text-[13px]' href="/">{contact.value}</Link>
                </ul>
              </div>
            ))}
          </div>
          <div className='flex flex-col gap-5 mt-5 md:mt-3.5'>
            <h4 className='font-semibold whitespace-nowrap'>{footerMessage('socialTitle')}</h4>
            <div className='flex flex-row items-center gap-5'>
              {SOCIALS.map((social, index) => (
                <div key={index}>
                  <Image src={social.src} alt="logo" width={30} height={30} />
                  <ul className='flex gap-4 text-base text-gray-30'>
                    {Array.isArray(social.links) && social.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link href={link} />
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-black/10" />
        <p className="text-[13px] w-full text-center text-gray-30">2023 Ingredients We Eat | All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer