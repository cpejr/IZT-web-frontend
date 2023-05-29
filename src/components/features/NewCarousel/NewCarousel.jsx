/* eslint-disable import/no-unresolved */
import React from 'react';

import PropTypes from 'prop-types';
import { FreeMode, Navigation, Thumbs } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { StyledSwiper, StyledSwiperSlide } from './Styles';

export default function NewCarousel({
  carouselData = [],
  maxWidth,
  maxHeight,
  aspectRatio,
  miniImages,
}) {
  const pagination = {
    clickable: true,
    renderBullet() {
      carouselData.map((src, alt) => {
        return `<img src=${src} alt=${alt} />`;
      });
    },
  };
  return (
    <>
      <StyledSwiper
        cssMode
        navigation={{ clickable: true }}
        pagination={miniImages ? pagination : { clickable: true }}
        spaceBetween={10}
        loop
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
      {/* <StyledSwiper
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
      </StyledSwiper> */}
    </>
  );
}

NewCarousel.defaultProps = {
  carouselData: [],
  miniImages: false,
};

NewCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  maxWidth: PropTypes.string.isRequired,
  maxHeight: PropTypes.string.isRequired,
  aspectRatio: PropTypes.number.isRequired,
  miniImages: PropTypes.bool,
};
