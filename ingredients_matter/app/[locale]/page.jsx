import Hero from '@/components/Hero/Hero';
import ItMatters from '@/components/ItMatters/ItMatters';
import WholeFoods from '@/components/WholeFoods/index';
import FoodiesJourney from './foodiesJourney/page';

export default function Home() {

  return (
      <div>
        <Hero />
        <ItMatters />
        <WholeFoods />
      </div>
  )
}
