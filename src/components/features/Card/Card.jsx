import React from 'react';
import { Container, CardText, CardTitle, Button } from './Styles';

function Card({
  title,
  image,
  imageAlt,
  text,
  isMiddle,
  marginBottomTitle,
  marginBottomText,
  marginTopText,
  marginBottomButton,
}) {
  return (
    <Container isMiddle={isMiddle}>
      <CardTitle marginBottomTitle={marginBottomTitle}>{title}</CardTitle>
      <img src={image} alt={imageAlt} />
      <CardText
        marginBottomText={marginBottomText}
        marginTopText={marginTopText}
      >
        {text}
      </CardText>
      <Button type="button" marginBottomButton={marginBottomButton}>
        Saiba mais
      </Button>
    </Container>
  );
}

export default Card;
