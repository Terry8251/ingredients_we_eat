import Image from "next/image";
import homeMadePasta from '../../../../public/Homemade Pasta.jpg';

export default function WhyItMatters() {
  return (
    <main className="bg-slate-100 flex flex-col">
      <h3 className="text-4xl font-bold mt-6 mx-48">Greetings, fellow culinary explorers!</h3>
      <div className='flex mt-6 mx-48 rounded-sm'>
        <Image className='w-full h-auto rounded-sm' src={homeMadePasta} />
      </div>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Have you ever found yourself lost in the labyrinth of ingredients on your food labels? I know I have, staring at those enigmatic components, wondering what on earth they really entail. If you share my curiosity, then you're in for a treat.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Let's pause for a moment to dissect the contents of our pantry – those mysterious, ultra-processed goodies with labels that might as well be written in code. But fear not, for I'm not here to thrust a diet plan upon you or peddle supplements. Instead, my mission is to shed light on the profound impact of the foods we select to nourish our bodies.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Consider this: the significance of our food choices cannot be overstated. The alarming rise in chronic conditions such as cancer, diabetes, and cardiovascular diseases is more often than not linked to what's right there on our plates. The prevalence of ultra-processed foods has taken a toll on our bodies and overall health.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Join me on a quest to liberate our pantries from the clutches of processed fare and, instead, dive into the art of crafting our own delectable meals. Trust me, the benefits extend beyond a healthier lifestyle; the flavors you'll uncover are simply unparalleled!
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Are you prepared to kickstart this savory journey with me? Let's embark on an adventure where taste reigns supreme!
      </p>
    </main>
  )
}