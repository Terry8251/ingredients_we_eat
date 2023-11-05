import { motion } from "framer-motion"


import React from 'react'

const ImageBlock = (props) => {
  const {
    id,
    variants,
  } = props;


  return (
    <motion.div
      className='md:mb-0 w-56 h-56 rounded-lg object-cover md:h-72'
      variants={variants}
    >
      <img
        src={`${id}`}
        alt={id}
      />
    </motion.div>
  )
}

export default ImageBlock