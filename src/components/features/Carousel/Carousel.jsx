import { useState } from 'react';

import PropTypes from 'prop-types';
import { FreeMode, Navigation, Pagination, Thumbs } from 'swiper';

/* eslint-disable import/no-unresolved */
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import {
  StyledSwiper,
  StyledSwiperSlide,
  SwiperWrapper,
  ThumbsSwiper,
} from './Styles';

export default function Carousel({
  carouselData = [],
  maxWidth = '144rem',
  maxHeight = '31.25rem',
  thumbsMaxWidth = '80rem',
  thumbsMaxHeight = '15rem',
  aspectRatio = '24 / 7',
  miniImages = false,
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  if (miniImages)
    return (
      <SwiperWrapper>
        <StyledSwiper
          maxWidth={maxWidth}
          maxHeight={maxHeight}
          aspectRatio={aspectRatio}
          navigation
          loop
          pagination={{ clickable: true }}
          modules={[FreeMode, Navigation, Thumbs]}
          style={{
            '--swiper-navigation-color': '#fff',
          }}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
        >
          {carouselData.map(({ src, name, alt }) => (
            <StyledSwiperSlide key={name}>
              <img src={src} alt={alt} />
            </StyledSwiperSlide>
          ))}
        </StyledSwiper>
        <ThumbsSwiper
          thumbsMaxWidth={thumbsMaxWidth}
          thumbsMaxHeight={thumbsMaxHeight}
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode
          loop
          watchSlidesProgress
        >
          {carouselData.map(({ src, name, alt }) => (
            <StyledSwiperSlide key={name} isThumb>
              <img src={src} alt={alt} />
            </StyledSwiperSlide>
          ))}
        </ThumbsSwiper>
      </SwiperWrapper>
    );

  return (
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
      style={{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
      }}
    >
      {carouselData.map(({ src, name, alt }) => (
        <StyledSwiperSlide key={name}>
          <img src={src} alt={alt} />
        </StyledSwiperSlide>
      ))}
    </StyledSwiper>
  );
}

Carousel.defaultProps = {
  carouselData: [],
  maxWidth: '144rem',
  maxHeight: '42rem',
  thumbsMaxWidth: '80rem',
  thumbsMaxHeight: '15rem',
  aspectRatio: '24/7',
  miniImages: false,
};

Carousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  maxWidth: PropTypes.string,
  maxHeight: PropTypes.string,
  thumbsMaxWidth: PropTypes.string,
  thumbsMaxHeight: PropTypes.string,
  aspectRatio: PropTypes.string,
  miniImages: PropTypes.bool,
};
