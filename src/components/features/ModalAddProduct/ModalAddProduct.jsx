import React, { useState } from 'react';
// import { toast } from 'react-toastify';
// import { useHistory } from 'react-router-dom';
// import { Spin } from 'antd';
// import { GrFormClose } from 'react-icons/gr';
import {
  Container,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  Text,
  MiniText,
  InputModal,
  InputModalName,
  ModalButton,
} from './Styles';

export default function ModalAddProduct() {
  return (
    <Container>
      {/* <CloseButton onClick={closeModalAddProduct}>
        <GrFormClose size={50} />
      </CloseButton> */}
      <ModalContent>
        <LeftSection>
          <Subsection>
            <Text>Nome do produto:</Text>
            <InputModalName />
          </Subsection>

          <Subsection>
            <Text>Descrição:</Text>
            <InputModal />
          </Subsection>

          <Subsection>
            <Text>Vantagens:</Text>
            <InputModal />
          </Subsection>
        </LeftSection>

        <RightSection>
          <Subsection>
            <Text>Imagens:</Text>
            <MiniText>Anexe as imagens do produto</MiniText>
          </Subsection>

          <Subsection>
            <MiniText>Associar categoria</MiniText>
          </Subsection>

          <Subsection>
            <Text>Documentos</Text>
          </Subsection>
          <ModalButton>Criar produto</ModalButton>
        </RightSection>
      </ModalContent>
    </Container>
  );
}
