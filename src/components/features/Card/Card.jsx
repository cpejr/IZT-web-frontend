import React from 'react';
import { Container, CardText, CardTitle, Button } from './Styles';

function Card({ title, image, imageAlt, text, isMiddle, marginBottom }) {
  return (
    <Container isMiddle={isMiddle} marginBottom={marginBottom}>
      <CardTitle>{title}</CardTitle>
      <img src={image} alt={imageAlt} />
      <CardText>{text}</CardText>
      <Button type="button">Saiba mais</Button>
    </Container>
  );
}

export default Card;
