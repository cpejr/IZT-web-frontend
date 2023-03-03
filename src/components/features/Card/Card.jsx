import React from 'react';
import { Container, CardText, CardTitle, Button, Picture } from './Styles';

function Card({
  title,
  image,
  imageAlt,
  text,
  isMiddle,
  isMiddleTitle,
  isMiddleImg,
  isMiddleBut,
  mediaTopWeb,
  media1000Top,
  media429Top,
  media360Top,
  pictureTopMedia1000,
}) {
  return (
    <Container isMiddle={isMiddle}>
      <CardTitle
        isMiddleTitle={isMiddleTitle}
        mediaTopWeb={mediaTopWeb}
        media1000Top={media1000Top}
        media429Top={media429Top}
        media360Top={media360Top}
      >
        {title}
      </CardTitle>
      <Picture
        isMiddleImg={isMiddleImg}
        src={image}
        alt={imageAlt}
        pictureTopMedia1000={pictureTopMedia1000}
      />
      <CardText>{text}</CardText>
      <Button type="button" isMiddleBut={isMiddleBut}>
        Saiba mais
      </Button>
    </Container>
  );
}

export default Card;
