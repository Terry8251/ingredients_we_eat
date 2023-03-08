import Hero from '@/components/Hero';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className='bg-gradient-radial-at-t from-white to-black'>
      <Navbar />
      <Hero />
    </main>
  )
}
