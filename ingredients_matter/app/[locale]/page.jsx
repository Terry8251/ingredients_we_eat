import Hero from '@/components/Hero/Hero';
import ItMatters from '@/components/ItMatters/ItMatters';
import Navbar from '@/components/Navbar/Navbar';
import WelcomePage from '@/components/WelcomePage/WelcomePage';
import WholeFoods from '@/components/WholeFoods/index';

export default function Home() {

  return (
      <div className='z-[2]'>
        <Navbar />
        <Hero />
        <ItMatters />
        <WelcomePage /> 
        <WholeFoods />
      </div>
  )
}
