import React from 'react';
import { FiSave } from 'react-icons/fi';
import { Container, Label, Input, ModalContent, ModalButton } from './Styles';

export default function ModalEditCategory() {
  return (
    <Container>
      <ModalContent>
        <Label>Nome da categoria:</Label>
        <Input />
        <ModalButton>
          <FiSave size={25} />
          <p>Salvar Alterações</p>
        </ModalButton>
      </ModalContent>
    </Container>
  );
}
