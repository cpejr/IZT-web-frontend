import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  aspect-ratio: 24 / 7;
  width: 100%;
  max-width: 1440px;
  max-height: 500px;
  overflow-x: hidden;
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  background: #fff;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
