import Image from "next/image";
import glyphosateImage from '../../../public/glyphosate.png';
import Link from "next/link";

export default function FindOutMore() {
  const unwittinglyLink = "https://www.consumernotice.org/environmental/pesticides/glyphosate-in-food/";
  const urineSamplesLink = "https://usrtk.org/pesticides/glyphosate-health-concerns/";
  return (
    <main className="bg-slate-100 flex flex-col">
      <h3 className="text-4xl font-bold mt-6 mx-48">Greetings, fellow culinary adventurers!</h3>
      <div className='flex mt-6 mx-48 rounded-sm'>
        <Image className='w-full h-auto rounded-sm' src={glyphosateImage} />
      </div>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Dive into the mysterious world of glyphosate, the chemical lurking in your favorite weed killers, with a staggering 80% of Americans <Link href={unwittinglyLink}><u className="text-blue-700">unwittingly</u></Link> exposed. Get ready to unravel the secrets behind this herbicide, and discover the surprising foods that carry its controversial presence. But fear not, we've got the lowdown on how to minimize your risk.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Glyphosate, the powerhouse ingredient in herbicides like Roundup, has been on the scene since 1974. Back then, it seemed like a harmless solution for farmers battling weeds. Fast forward to today, and the safety of glyphosate is under scrutiny, with recent studies challenging the initial assumption of minimal human risk. Brace yourself for a rollercoaster of conflicting evidence on its potential to cause cancer, leaving us all hanging on the edge of a botanical cliffhanger.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Farmers, in their quest for weed-free fields, have relied on glyphosate, turning it into the go-to solution since the '70s. But here's the twist: its use has skyrocketed, thanks to glyphosate-resistant crops introduced in 1996. The scientific scene is murkier than ever, making it a challenge for us, the public, to navigate the treacherous waters of potential risks.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        In a jaw-dropping plot twist, Bayer, the big shot behind Roundup, has declared a halt to residential sales by 2023, waving a red flag due to risks for consumers and farmworkers. The bombshell came after an $80 million lawsuit tied Roundup to non-Hodgkin lymphoma. Stay tuned, stay vigilant, and let's unravel the glyphosate enigma together.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Now, let's rewind and get to the roots of glyphosate. This herbicide, born in 1974 and now starring in various products, including the infamous Roundup, is causing a health stir, especially regarding the big "C" word – cancer. It's cozying up with genetically modified organisms (GMOs), particularly herbicide-tolerant crops, resulting in a 500% surge in American exposure since 1996.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Hold onto your gardening gloves because Bayer, the owner of Monsanto, is playing a bold card by pulling glyphosate-based herbicides off the U.S. consumer market by 2023. However, the saga doesn't end there; glyphosate will still reign supreme in agriculture, and alternative herbicides may bring their own set of chemical conundrums.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Glyphosate takes the crown as the most-used agricultural chemical globally, boasting jaw-dropping stats: 1.8 million tons applied in the U.S. from 1974 to 2014, and a whopping 9.5 million tons worldwide – that's almost half a pound of Roundup on every cultivated acre globally. It's a chemical kingdom ruling with an iron fist.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        But wait, there's more drama. Scientists and healthcare providers are raising the alarm about glyphosate's potential health impacts. The International Federation of Gynecology and Obstetrics is calling for a global phase-out, and studies are pleading for a safety standards makeover. Over 80% of U.S. <Link href={urineSamplesLink}><u className="text-blue-700">urine</u></Link> samples are now carrying the glyphosate badge, with exposure skyrocketing by 500% since 1996. Corporate studies vouching for glyphosate's safety are under fire for being outdated and about as reliable as a leaky watering can.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        The cliffhanger continues as we step into the glyphosate-cancer arena. The World Health Organization labeled it "probably carcinogenic" in 2015, but the U.S. Environmental Protection Agency can't seem to agree, leaving us in suspense. Stay tuned for the latest episode in the unfolding glyphosate saga, where conflicting reports and ongoing litigation keep the controversy alive and kicking.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Now, let's zoom in for a closer look at the health thriller that glyphosate brings to the table. Picture this: recent studies dropping bombshells in July 2023, linking glyphosate to non-Hodgkin lymphoma, sending shockwaves through the scientific community. But that's not all – glyphosate is also playing a role in a potential blockbuster trilogy of endocrine disruption, reproductive issues, liver and kidney diseases, neurological effects, and even anemia. It's a health drama with all the twists and turns you never saw coming.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        But the drama doesn't stop there. Glyphosate isn't just causing a stir in human health; it's wreaking havoc on the environment too. Bees and butterflies are taking a hit, with glyphosate impairing bee learning and damaging honeybee gut bacteria. Monarch butterflies are facing a population decline due to reductions in milkweed caused by glyphosate. And let's not forget the legal showdowns, with over 100,000 lawsuits pointing fingers at Bayer, claiming Roundup herbicide led to non-Hodgkin lymphoma. Unsealed documents also suggest some backstage manipulation by Monsanto in influencing EPA processes and questionable research practices in asserting glyphosate's safety.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Hold onto your salad forks because glyphosate is stealthily sneaking into our food. Residues are turning up in various dishes, raising eyebrows about testing practices and inconsistent monitoring by regulatory agencies. Despite Bayer's reassurances, the jury is still out on the long-term impact of glyphosate residues on human health.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        But here's the silver lining – armed with knowledge, we can navigate the glyphosate jungle and demand safer alternatives in agriculture. So, grab your gardening gloves, stay informed, and let's turn the page on this gripping glyphosate saga together!
      </p>
    </main>
  )
}