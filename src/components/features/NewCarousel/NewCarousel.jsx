/* eslint-disable import/no-unresolved */
import PropTypes from 'prop-types';
import { Navigation, Pagination, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { StyledSwiper, StyledSwiperSlide } from './Styles';

export default function NewCarousel({
  carouselData = [],
  maxWidth,
  maxHeight,
  aspectRatio,
}) {
  return (
    <StyledSwiper
      cssMode
      navigation={{ clickable: true }}
      pagination={{ clickable: true }}
      loop
      modules={[Navigation, Pagination, Autoplay]}
      keyboard={{ enabled: true }}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
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
  );
}

NewCarousel.defaultProps = {
  carouselData: [],
};

NewCarousel.propTypes = {
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  maxWidth: PropTypes.string.isRequired,
  maxHeight: PropTypes.string.isRequired,
  aspectRatio: PropTypes.string.isRequired,
};