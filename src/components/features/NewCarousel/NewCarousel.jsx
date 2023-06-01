/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-unresolved */
import React, { useState } from 'react';

import PropTypes from 'prop-types';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { StyledSwiper, StyledSwiperSlide } from './Styles';

export default function NewCarousel({
  carouselData = [],
  maxWidth,
  maxHeight,
  aspectRatio,
  miniImages,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  console.log(thumbsSwiper);
  return (
    <>
      {miniImages ? (
        <StyledSwiper
          cssMode
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          loop
          modules={[Navigation, Pagination]}
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
      ) : (
        <>
          <StyledSwiper
            style={{
              '--swiper-navigation-color': '#fff',
              '--swiper-pagination-color': '#fff',
            }}
            spaceBetween={10}
            navigation
            modules={[FreeMode, Navigation, Thumbs]}
            {...(!!thumbsSwiper && { swiper: thumbsSwiper })}
          >
            {carouselData.map(({ src, name, alt }) => (
              <StyledSwiperSlide key={name}>
                <img src={src} alt={alt} />
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
          <StyledSwiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {carouselData.map(({ src, name, alt }) => (
              <StyledSwiperSlide key={name}>
                <img src={src} alt={alt} />
              </StyledSwiperSlide>
            ))}
          </StyledSwiper>
        </>
      )}
    </>
  );
}

NewCarousel.defaultProps = {
  carouselData: [],
  miniImages: false,
  maxWidth: '144rem',
  maxHeight: '42rem',
  aspectRatio: '24/7',
};

NewCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  aspectRatio: PropTypes.number,
  miniImages: PropTypes.bool,
};
