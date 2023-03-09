import React from 'react';
import { FiSave } from 'react-icons/fi';
import { Container, Text, Input, ModalContent, ModalButton } from './Styles';

export default function ModalEditCategory() {
  return (
    <Container>
      <ModalContent>
        <Text>Nome da categoria:</Text>
        <Input />
        <ModalButton>
          <FiSave size={25} />
          <p>Salvar alterações</p>
        </ModalButton>
      </ModalContent>
    </Container>
  );
}
