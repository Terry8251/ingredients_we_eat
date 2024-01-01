import Image from "next/image";
import pesticideImage from '../../../../public/pesticide.png';

export default function Chlorpyrifos() {
  return (
    <div className="bg-slate-100 flex flex-col">
      <h3 className="text-4xl font-bold mt-6 mx-48">Turning the Page: EPA's Bold Move to Safeguard Health by Bidding Farewell to Chlorpyrifos on Our Plates</h3>
      <div className='flex mt-6 mx-48 rounded-sm'>
        <Image className='w-full h-auto rounded-sm' src={pesticideImage} />
      </div>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        In a <u className="text-blue-700">groundbreaking</u> move aimed at championing public health, especially for our children and hardworking farm laborers, the U.S. Environmental Protection Agency (EPA) has declared the end of an era for the pesticide chlorpyrifos on our food. This isn't just about tweaking rules; it's a sweeping decision revoking all allowances for chlorpyrifos, those limits that decide how much of this pesticide can linger on our food, and it's also waving goodbye to any registered use of chlorpyrifos on our plates.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        Administrator Michael S. Regan didn't mince words about the importance of this decision. It's a bold step, a shield for our kids, those working the fields, and everyone else from the lurking risks tied to chlorpyrifos. This pesticide, a staple in agriculture, has been unmasked as an organophosphate troublemaker, particularly affecting the budding brains of our little ones.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        This story begins with a courtroom showdown – the Ninth Circuit Court told the EPA to deal with a petition from back in 2007, where Pesticide Action Network North America and Natural Resources Defense Council demanded the elimination of all chlorpyrifos allowances due to safety red flags, especially for our children's developing minds. Despite brushing it off in 2017 and 2019, the Court, in April 2021, pulled rank, insisting that the EPA either jazz up those allowances with safety reassurances or just toss them out.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        EPA's recent call puts its foot down, saying chlorpyrifos isn't making the health cut, a tune harmonizing with similar moves from other countries and states. Sure, farmers have long leaned on chlorpyrifos, but times are changing. State restrictions, reduced production, and a lineup of alternatives have dimmed its spotlight. EPA vows to explore these alternatives, guaranteeing our food supply remains not just plentiful but safe.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        This EPA bombshell isn't a one-off; it's a plot twist in the ongoing saga of chlorpyrifos. The agency is sifting through public opinions, gearing up for the next act – the registration review for the leftover non-food roles of chlorpyrifos. Brace yourself for more, maybe with added measures to safeguard health and the environment.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        And as we witness this chapter unfold, let's not forget the dark history of chlorpyrifos. Crafted by the Nazis for warfare, this toxic character has been wreaking havoc, not on distant battlefields, but right in our fields, posing threats to our health and the world we live in. It's time for a change, and the EPA just turned the page.
      </p>
      <p className="text-lg whitespace-pre-line mt-7 mx-64">
        In a surprising twist on November 2, 2023, the 8th Circuit Court of Appeals delivered a pivotal decision. They vacated the EPA's rule that initially took a bold stance, effectively banning the use and presence of chlorpyrifos on the foods we eat. This development adds a layer of complexity to the ongoing narrative surrounding chlorpyrifos and introduces new challenges to the regulatory landscape. Stay tuned for more twists in this evolving story.
      </p>
    </div>
  )
}