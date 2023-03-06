import PropTypes from 'prop-types';
import { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';

import {
  Button,
  Container,
  ImageContainer,
  ImagesContainer,
  Inner,
  MiniImageContainer,
  Dots,
  NavButtons,
} from './Styles';

export default function Carousel({
  carouselData = [],
  maxHeight = '500px',
  miniImages = false,
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slidesCount = carouselData.length;
  const minSwipeDistance = 50;

  const updateImage = (newIndex) => {
    if (newIndex < 0) setCurrentImageIndex(slidesCount - 1);
    else if (newIndex >= slidesCount) setCurrentImageIndex(0);
    else setCurrentImageIndex(newIndex);
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    const touchEndCurrentPos = e.targetTouches[0].clientX;
    setTouchEnd(touchEndCurrentPos);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;

    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) updateImage(currentImageIndex + 1);
    else if (isRightSwipe) updateImage(currentImageIndex - 1);
  };

  return (
    <Container
      maxHeight={maxHeight}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <ImagesContainer>
        <Inner currentImageIndex={currentImageIndex}>
          {carouselData.map(({ src, name, alt }) => (
            <ImageContainer key={name}>
              <img src={src} alt={alt} />
            </ImageContainer>
          ))}
        </Inner>
      </ImagesContainer>

      <NavButtons>
        <Button
          type="button"
          onClick={() => updateImage(currentImageIndex - 1)}
        >
          <MdKeyboardArrowLeft />
        </Button>

        {carouselData.map(({ src, name, alt }, index) =>
          miniImages ? (
            <MiniImageContainer
              key={name}
              active={index === currentImageIndex}
              onClick={() => updateImage(index)}
            >
              <img src={src} alt={alt} />
            </MiniImageContainer>
          ) : (
            <Dots
              type="button"
              key={name}
              active={index === currentImageIndex}
              onClick={() => updateImage(index)}
            />
          )
        )}

        <Button onClick={() => updateImage(currentImageIndex + 1)}>
          <MdKeyboardArrowRight />
        </Button>
      </NavButtons>
    </Container>
  );
}

Carousel.defaultProps = {
  carouselData: [],
  maxHeight: '500px',
};

Carousel.propTypes = {
  maxHeight: PropTypes.string,
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
