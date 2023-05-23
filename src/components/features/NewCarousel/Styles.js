import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  aspect-ratio: 24 / 7;
  width: 100%;
  max-width: 90rem;
  //max-height: 31.25rem;
  overflow-x: hidden;
`;
export const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 1.125rem;
  background: #fff;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
