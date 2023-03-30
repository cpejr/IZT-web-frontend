import React, { useRef } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { HiPlusSm } from 'react-icons/hi';

import { useUpdateProducts } from '../../../hooks/query/products';
import AdminShowFiles from '../AdminShowFiles/AdminShowFiles';
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
import {
  // buildEditProductErrorMessage,
  editProductValidationSchema,
} from './utils';

export default function ModalEditProduct({ product }) {
  const pictureInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editProductValidationSchema),
    defaultValues: {
      name: product.name,
      description: product.description,
      advantages: product.advantages,
      pictures: product.pictures?.map((picture) => ({
        file: [
          {
            url: picture.url,
          },
        ],
      })),
    },
  });
  console.log(product.pictures?.map((picture) => [{ url: picture.url }]));

  // const { mutate: updateProduct } = useUpdateProducts({
  //   onSuccess: () => alert('produto modificado com sucesso!'), // insert toast
  //   onError: (err) => {
  //     const errorMessage = buildEditProductErrorMessage(err);

  //     // Do something to the errorMessage(toast)
  //     alert(errorMessage);
  //   },
  // });
  // const onSubmit = (data) => updateProduct(data);

  const picturesFieldArray = useFieldArray({
    control,
    name: 'pictures',
  });

  const documentsFieldArray = useFieldArray({
    control,
    name: 'pictures',
  });

  return (
    <Container>
      <ModalContent>
        <LeftSection>
          <Subsection>
            <Text>Nome do produto:</Text>
            <InputModalName {...register('name')} />
          </Subsection>

          <Subsection>
            <Text>Descrição:</Text>
            <InputModal {...register('description')} />
          </Subsection>

          <Subsection>
            <Text>Vantagens:</Text>
            <InputModal {...register('advantages')} />
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
            <AdminShowFiles
              register={register}
              control={control}
              errors={errors}
              documentsFieldArray={documentsFieldArray}
              buttonColor="black"
            />
            <AddButton onClick={() => documentInputRef.current.click()}>
              <input
                type="file"
                style={{ display: 'none' }}
                ref={documentInputRef}
                onChange={(e) => {
                  const file = e.target.files;
                  documentsFieldArray.append({ file });
                }}
              />
              <HiPlusSm size={25} />
              Novo Documento
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
  product: PropTypes.object.isRequired,
};
