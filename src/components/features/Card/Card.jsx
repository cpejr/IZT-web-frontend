import PropTypes from 'prop-types';
import { Container, CardText, CardTitle, Button, Picture } from './Styles';

export default function Card({
  title,
  image,
  imageAlt,
  text,
  isMiddle = false,
  mediaTopWeb = false,
  media1000Top = false,
  media429Top = false,
  media360Top = false,
  pictureTopMedia1000 = false,
}) {
  return (
    <Container isMiddle={isMiddle}>
      <CardTitle
        mediaTopWeb={mediaTopWeb}
        media1000Top={media1000Top}
        media429Top={media429Top}
        media360Top={media360Top}
      >
        {title}
      </CardTitle>
      <Picture
        src={image}
        alt={imageAlt}
        pictureTopMedia1000={pictureTopMedia1000}
      />
      <CardText>{text}</CardText>
      <Button type="button">Saiba mais</Button>
    </Container>
  );
}

Card.defaultProps = {
  isMiddle: false,
  mediaTopWeb: false,
  media1000Top: false,
  media429Top: false,
  media360Top: false,
  pictureTopMedia1000: false,
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isMiddle: PropTypes.bool,
  mediaTopWeb: PropTypes.bool,
  media1000Top: PropTypes.bool,
  media429Top: PropTypes.bool,
  media360Top: PropTypes.bool,
  pictureTopMedia1000: PropTypes.bool,
};
