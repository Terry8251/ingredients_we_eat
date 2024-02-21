"use client"

import React from 'react'
import Image from 'next/image';

const icons = (props) => {
  const { 
    alt,
    height,
    src,
    width,
  } = props;

  return (
    <div className={'relative'}>
      <Image 
        src={src}
        alt={alt}
        responsive
        height={50}
        width={50}
      />
    </div>
  )
}

export default icons