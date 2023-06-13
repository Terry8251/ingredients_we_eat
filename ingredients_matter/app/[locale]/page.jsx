import Hero from '@/components/Hero/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {

  return (
      <div className='py-2 relative z-10 bg-gradient-to-b from-[#365b3c] to-[#89e899]'>
        <Navbar />
        <Hero />
      </div>
  )
}
