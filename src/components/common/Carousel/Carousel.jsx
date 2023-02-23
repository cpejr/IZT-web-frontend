import PropTypes from 'prop-types';
import { Container, Data, Dots, ImageContainer, NavLinks } from './Styles';

export default function Carousel({ carouselData, height }) {
  return (
    <>
      <Container height={height}>
        <Data slidesCount={carouselData.length}>
          {carouselData.map(({ src, name, alt }) => (
            <ImageContainer id={name} key={name}>
              <img src={src} alt={alt} />
            </ImageContainer>
          ))}
        </Data>
      </Container>
      <NavLinks>
        {carouselData.map(({ name }) => (
          <Dots href={`#${name}`} key={name} />
        ))}
      </NavLinks>
    </>
  );
}

Carousel.defaultProps = {
  carouselData: [],
};

Carousel.propTypes = {
  height: PropTypes.string.isRequired,
  carouselData: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};
