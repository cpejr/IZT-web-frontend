/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container, Frames, Arrows, Image } from './Styles';

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { length } = slides;

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  console.log(currentIndex);

  return (
    <Container>
      <Image backgroundImage={`url(${slides[currentIndex].image})`} />

      <Arrows>
        <button type="button" onClick={prevSlide}>
          ESQUERDA
        </button>
        <button type="button" onClick={nextSlide}>
          DIREITA
        </button>
      </Arrows>
    </Container>
  );
}

export default Carousel;
