'use client'
import { useEffect, useRef, useState } from 'react'
import ImageBlock from './ImageBlock';


const WholeFoods = () => {

  const [widthSize, setWidthSize] = useState();

  const hasWindow = typeof window !== 'undefined';
  const width = hasWindow ? window.innerWidth : null;

  const handleResize = () => {
    console.log('width', width);
    if (width !== null && width > 720) {
      setWidthSize(400);
    } else {
      setWidthSize(0)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {window.removeEventListener('resize', handleResize);};
  }, [widthSize]);

  return (
    <div
     className='bg-gradient-to-b from-[#1721E6]/100 to-white pb-[40px]'
    >
      <ImageBlock 
        widthSize={width}
      />
    </div>
  )
}

export default WholeFoods


{/* <div className='flex flex-col bg-gradient-to-b from-[#1721E6]/100 to-white'>
<div className='flex flex-col m-[0px 10px 0px 20px] md:flex-row'>
  <div className='m-2.5 w-auto'>
    <ImageBlock
      id='salmon_fillet_small.png'
    />
  </div>
  <div className='m-2.5 w-auto'>
    <ImageBlock
      id='veggies.png'
    />
  </div>
  <div className='m-2.5 w-auto'>
    <ImageBlock
      id='fruit_bowl.png'
    />
  </div>
  <div className='m-2.5 w-auto'>
    <ImageBlock
      id='fresh_bread.png'
    />
  </div>
  <div className='m-2.5 w-auto'>
    <ImageBlock
      id='tomahawk_steak.png'
    />
  </div>
</div>
<div className='flex flex-col m-[0px 10px 0px 20px] md:flex-row'>
  <div className='leading-9 relative text-center text-6xl'>
    {messages('bulletPoint1')}
  </div>
</div>
</div>
)
} */}