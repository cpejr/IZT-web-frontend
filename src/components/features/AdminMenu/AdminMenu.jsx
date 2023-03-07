import React from 'react';
import {
  Container,
  MenuItens,
  Section,
  Title,
  Text,
  BlackLine,
  StyledLink,
} from './Styles';

export default function AdminMenu() {
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
          <StyledLink to="/administrador/editar-produtos">
            Listar produtos
          </StyledLink>
        </Section>

        <Section>
          <Title>Categorias</Title>
          <Text>Adicionar categoria</Text>
          <StyledLink to="/administrador/editar-categorias">
            Listar categorias
          </StyledLink>
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
