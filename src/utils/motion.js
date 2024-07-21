export const slideInTextVariant = (x, delay, duration) => {
  return {
    start: {
      x: x,
      opacity: 0,
    },
    end: {
      x: 0,
      opacity: 1,
      transition: {
        delay: delay,
        duration: duration,
      },
    },
  };
};

export const ImageZoomAnimation = {
  scale: [1, 1.5, 1],
  transition: {
    type: "spring",
    duration: 30,
    repeat: Infinity,
    repeatDelay: 0,
  },
};

export const slideInComponentVariant = (side) => {
  return {
    start: {
      opacity: 0,
      x: side === "left" ? -200 : 200,
    },
    end: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
      },
    },
  };
};
