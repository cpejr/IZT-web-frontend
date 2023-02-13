import React from 'react';
import { Carousel } from '../../components/features';
import { Container } from './Styles';

function Home() {
  return (
    <Container>
      <Carousel />
      <div>Cards</div>
      <div>Contact inputs</div>
      <div>
        <h1>Conheça a nossa história</h1>
        <text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna
          dolor, malesuada ac cursus a, porttitor a ligula. Etiam nec ipsum quis
          dui malesuada vehicula quis at diam. Nunc suscipit est eget orci
          lobortis tempor. Vivamus scelerisque sem nec lacus rutrum pretium.
          Donec quis mauris eu lorem luctus suscipit. Mauris maximus consequat
          molestie. Sed a molestie elit, dapibus porta massa. Pellentesque vel
          nulla egestas, sollicitudin sem vel, maximus lectus. Fusce interdum
          condimentum nulla, sit amet ultrices justo placerat ut. Nullam
          pellentesque aliquet quam ut condimentum. Mauris libero magna,
          vehicula quis dui ac, faucibus suscipit turpis. Quisque sed convallis
          diam, tempus aliquam erat. Mauris id risus at purus pharetra euismod
          id sed arcu. Duis nisl augue, mattis quis congue sed, scelerisque eu
          augue. Mauris ac elementum risus.
        </text>
        <text>
          Quisque id dui id felis lobortis luctus quis vitae turpis. Duis auctor
          congue urna, eu dictum urna laoreet in. Donec vitae nunc ac nibh
          finibus pellentesque a vitae purus. Proin fringilla ligula ac placerat
          luctus. Sed orci lacus, dapibus ut gravida vitae, auctor sed leo. Nunc
          laoreet leo imperdiet rhoncus efficitur. Sed quis risus erat.
          Phasellus non enim metus. Sed eget gravida sapien. Nunc quis facilisis
          nunc. Morbi non placerat justo. Cras congue mi nisi, quis volutpat
          orci tincidunt iaculis.
        </text>
      </div>
    </Container>
  );
}

export default Home;
