import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};

  aspect-ratio: ${(props) => props.aspectRatio};
`;

export const ThumbsSwiper = styled(Swiper)`
  width: 100%;
  height: 100%;
  max-width: ${(props) => props.thumbsMaxWidth};
  max-height: ${(props) => props.thumbsMaxHeight};
`;

export const StyledSwiperSlide = styled(SwiperSlide)`
  text-align: center;
  font-size: 1.125rem;
  background: #fff;

  width: 100%;
  height: 100%;

  ${(props) => (props.isThumb ? 'cursor: pointer;' : '')}

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const SwiperWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;
  height: 100%;
  max-width: ${(props) => props.maxWidth};
  max-height: ${(props) => props.maxHeight};
`;
