import React from 'react';
import {
  Container,
  MenuItens,
  Section,
  Title,
  Text,
  BlackLine,
} from './Styles';

export default function AdministratorMenu() {
  return (
    <Container>
      <MenuItens>
        <Section>
          <Title>Menu do Administrador</Title>
          <BlackLine />
        </Section>

        <Section>
          <Title>Produtos</Title>
          <Text>Adicionar produtos</Text>
          <Text>Listar produtos</Text>
        </Section>

        <Section>
          <Title>Categorias</Title>
          <Text>Adicionar categoria</Text>
          <Text>Listar categorias</Text>
          <BlackLine />
        </Section>

        <Section>
          <Title>Definições de acesso</Title>
          <Text>Liberação do curso</Text>
          <Text>Liberação do software</Text>
        </Section>
      </MenuItens>
    </Container>
  );
}
