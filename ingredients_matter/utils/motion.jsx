export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  hidden: {
    x: direction === 'left' ? '-500%' : direction === 'right' ? '500%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type, 
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});