import React from 'react';
import { CarouselData } from './CarouselData';

const Carousel = () => {
  return (
    <>
      {CarouselData.map((slide, index) => {
        return <img src={slide.image} alt="travel image" />;
      })}
    </>
  );
};

export default Carousel;
