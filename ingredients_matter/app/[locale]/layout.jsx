import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';
import './globals.css'
import { Exo } from '@next/font/google'
import Navbar from '@/components/Navbar/Navbar';

const exo = Exo({
  subsets: ["latin"],
  variable: "--font-exo"
})

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}

export default async function RootLayout({ children, params: {locale}}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${exo.variable} font-exo`}>
      <NextIntlClientProvider locale={locale} messages={messages}>
        {children}
      </NextIntlClientProvider>
      </body>
    </html>
  )
}
