import React from 'react';
import {
  Container,
  Introduction,
  Title,
  Description,
  ButtonRow,
  Button,
  ProductCategory,
  CategoryName,
  Divider,
  ProductRow,
  Product,
  ProductImage,
  ProductName,
} from './Styles';

const products = [
  {
    Category: 'Tipo 1',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Tipo 2',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Tipo 3',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Tipo 4',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
  {
    Category: 'Tipo 5',
    Bocals: [
      {
        Name: 'Product 1',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 2',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
      {
        Name: 'Product 3',
        image:
          'https://www.decorlux.com.br/site2019/wp-content/uploads/2020/07/ddd.jpg',
      },
    ],
  },
];

function Catalog() {
  return (
    <Container>
      <Introduction>
        <Title>Tudo o que você precisa está aqui!</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          sed odio eu enim gravida varius quis non orci. Curabitur sed placerat
          sem, eu faucibus diam. Fusce ut nulla sed sapien.
        </Description>
      </Introduction>
      <ButtonRow>
        {products.map((product) => (
          <a key={product.Category} href={`#${product.Category}`}>
            <Button>{product.Category}</Button>
          </a>
        ))}
      </ButtonRow>
      {products.map((product) => (
        <ProductCategory key={product.Category}>
          <Divider />
          <CategoryName id={product.Category}>{product.Category}</CategoryName>
          <ProductRow>
            {product.Bocals.map((bocal) => (
              <Product key={bocal.Name}>
                <ProductImage src={bocal.image} />
                <ProductName>{bocal.Name}</ProductName>
              </Product>
            ))}
          </ProductRow>
        </ProductCategory>
      ))}
    </Container>
  );
}

export default Catalog;
