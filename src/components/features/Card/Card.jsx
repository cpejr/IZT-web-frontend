import React from 'react';
import { Container, CardText, CardTitle, Button, Picture } from './Styles';

function Card({
  title,
  image,
  imageAlt,
  text,
  isMiddle,
  mediaTopWeb,
  media1000Top,
  media429Top,
  media360Top,
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
      <Picture src={image} alt={imageAlt} />
      <CardText>{text}</CardText>
      <Button type="button">Saiba mais</Button>
    </Container>
  );
}

export default Card;
