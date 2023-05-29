/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { FreeMode, Navigation, Thumbs } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { StyledSwiper, StyledSwiperSlide, StyledSwiper2 } from './Styles';

export default function NewCarousel({
  carouselData = [],
  maxWidth,
  maxHeight,
  aspectRatio,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <StyledSwiper
        cssMode
        navigation
        spaceBetween={10}
        loop
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        keyboard={{ enabled: true }}
        maxWidth={maxWidth}
        maxHeight={maxHeight}
        aspectRatio={aspectRatio}
      >
        {carouselData.map(({ src, name, alt }) => (
          <StyledSwiperSlide key={name}>
            <img src={src} alt={alt} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
      <StyledSwiper
        onSwiper={setThumbsSwiper}
        loop
        spaceBetween={10}
        slidesPerView={4}
        freeMode
        watchSlidesProgress
        modules={[FreeMode, Navigation, Thumbs]}
      >
        {carouselData.map(({ src, name, alt }) => (
          <StyledSwiperSlide key={name}>
            <img src={src} alt={alt} />
          </StyledSwiperSlide>
        ))}
      </StyledSwiper>
    </>
  );
}

NewCarousel.defaultProps = {
  carouselData: [],
};

NewCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  maxWidth: PropTypes.string.isRequired,
  maxHeight: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
};
