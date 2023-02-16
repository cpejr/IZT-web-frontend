/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Container, Frames, Arrows, Image, Dot } from './Styles';

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
          <img
            src="https://cdn-icons-png.flaticon.com/512/271/271220.png"
            alt="buttonpng"
            border="0"
            height={20}
          />
        </button>

        {slides.map((slide, index) => (
          <Dot
            onClick={() => goToSlide(index)}
            key={index}
            backgroundColor={index === currentIndex}
          />
        ))}
        <button type="button" onClick={nextSlide}>
          <img
            src="https://cdn-icons-png.flaticon.com/512/32/32213.png"
            alt="buttonpng"
            border="0"
            height={20}
          />
        </button>
      </Arrows>
    </Container>
  );
}

export default Carousel;
