import React from 'react';
import { Container, CardText, CardTitle } from './Styles';

function Card({ title, image, imageAlt, text, isMiddle }) {
  return (
    <Container isMiddle={isMiddle}>
      <CardTitle>{title}</CardTitle>
      <img src={image} alt={imageAlt} />
      <CardText>{text}</CardText>
      <button type="button">Saiba mais</button>
    </Container>
  );
}

export default Card;
