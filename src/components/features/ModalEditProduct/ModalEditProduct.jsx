import React, { useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { HiPlusSm } from 'react-icons/hi';

import AdminShowPictures from '../AdminShowPictures/AdminShowPictures';
import {
  Container,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  CategorySubsection,
  Text,
  MiniText,
  AddButton,
  InputModal,
  InputModalName,
  ModalButton,
} from './Styles';
import { editProductValidationSchema } from './utils';

export default function ModalEditProduct({
  productName,
  productDescription,
  productAdvantages,
}) {
  const pictureInputRef = useRef(null);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProductValidationSchema),
  });

  const picturesFieldArray = useFieldArray({
    control,
    name: 'pictures',
  });

  return (
    <Container>
      <ModalContent>
        <LeftSection>
          <Subsection>
            <Text>Nome do produto:</Text>
            <InputModalName defaultValue={productName} />
          </Subsection>

          <Subsection>
            <Text>Descrição:</Text>
            <InputModal defaultValue={productDescription} />
          </Subsection>

          <Subsection>
            <Text>Vantagens:</Text>
            <InputModal defaultValue={productAdvantages} />
          </Subsection>
        </LeftSection>

        <RightSection>
          <Subsection>
            <Text>Imagens:</Text>
            <MiniText>Anexe as imagens do produto</MiniText>
            <AdminShowPictures
              register={register}
              control={control}
              errors={errors}
              picturesFieldArray={picturesFieldArray}
              buttonColor="white"
            />{' '}
            <AddButton
              type="button"
              onClick={() => pictureInputRef.current.click()}
            >
              <input
                accept="image/jpeg, image/pjpeg, image/png, image/gif"
                type="file"
                style={{ display: 'none' }}
                ref={pictureInputRef}
                onChange={(e) => {
                  const file = e.target.files;
                  picturesFieldArray.append({ file });
                }}
              />
              <HiPlusSm size={25} />
              Nova imagem
            </AddButton>
          </Subsection>

          <Subsection>
            <Text>Documentos</Text>
            <AddButton>
              <HiPlusSm size={25} />
              Novo documento
            </AddButton>
          </Subsection>

          <CategorySubsection>
            <Text>Categorias</Text>
            <p>SETLIST</p>
          </CategorySubsection>

          <ModalButton>
            <FiSave size={20} />
            <p>Salvar Alerações</p>
          </ModalButton>
        </RightSection>
      </ModalContent>
    </Container>
  );
}

ModalEditProduct.propTypes = {
  productName: PropTypes.func.isRequired,
  productDescription: PropTypes.object.isRequired,
  productAdvantages: PropTypes.object.isRequired,
};
