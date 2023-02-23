import { Carousel } from '../../components/common';
import { Container } from './Styles';
import carouselData from '../../assets/homeCarousel/data';

export default function Home() {
  return (
    <Container>
      <Carousel carouselData={carouselData} height="550px" />
    </Container>
  );
}
