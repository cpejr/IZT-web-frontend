import PropTypes from 'prop-types';
import { useState } from 'react';
import {
  Button,
  Container,
  ImageContainer,
  ImagesContainer,
  Inner,
  MiniImageContainer,
  // Dots,
  NavButtons,
} from './Styles';

export default function Carousel({ productData = [], maxHeight }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slidesCount = productData.length;
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
          {productData.map(({ src, name, alt }) => (
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
          Prev
        </Button>
        {productData.map(({ src, name, alt }, index) => (
          // <Dots
          //   type="button"
          //   key={name}
          //   active={index === currentImageIndex}
          //   onClick={() => updateImage(index)}
          // />
          <MiniImageContainer
            key={name}
            active={index === currentImageIndex}
            onClick={() => updateImage(index)}
          >
            <img src={src} alt={alt} />
          </MiniImageContainer>
        ))}
        <Button onClick={() => updateImage(currentImageIndex + 1)}>Next</Button>
      </NavButtons>
    </Container>
  );
}

Carousel.defaultProps = {
  productData: [],
};

Carousel.propTypes = {
  maxHeight: PropTypes.string.isRequired,
  productData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
