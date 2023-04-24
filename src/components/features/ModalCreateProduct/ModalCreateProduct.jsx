import { useState } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useQueryClient } from '@tanstack/react-query';
import objToFormData from 'object-to-formdata';
import PropTypes from 'prop-types';
import { useFieldArray, useForm } from 'react-hook-form';
import { FiSave } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { useGetCategories } from '../../../hooks/query/categories';
import { useCreateProduct } from '../../../hooks/query/products';
import { DOCUMENTS_CONFIG } from '../../../utils/constants';
import { FormSelect } from '../../common';
import AddFileButton from '../AddFileButton/AddFileButton';
import DocumentFile from '../DocumentFile/DocumentFile';
import PictureFile from '../PictureFile/PictureFile';
import {
  Container,
  ModalContent,
  LeftSection,
  RightSection,
  Subsection,
  CategorySubsection,
  Text,
  MiniText,
  TextAreaModal,
  Input,
  ModalButton,
  DocumentsContainer,
  ErrorMessage,
} from './Styles';
import {
  buildCreateProductErrorMessage,
  buildGetCategoriesErrorMessage,
  createProductValidationSchema,
} from './utils';

export default function ModalCreateProduct({ close }) {
  // Variables
  const [isPending, setIsPending] = useState(false); // Important for modal loading
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const queryClient = useQueryClient();
  const documentsLimit = 3;
  const picturesLimit = 4;

  // Backend calls
  const { data: categories, isLoading: isLoadingCategories } = useGetCategories(
    {
      onError: (err) => {
        const errorMessage = buildGetCategoriesErrorMessage(err);

        toast.error(errorMessage);
      },
    }
  );
  const { mutate: createProduct } = useCreateProduct({
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['products', 'searchByName'],
      });

      close();
    }, // insert toast
    onError: (err) => {
      const errorMessage = buildCreateProductErrorMessage(err);

      toast.error(errorMessage);
      setIsPending(false);
    },
  });

  // Form handlers
  const {
    handleSubmit,
    register,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProductValidationSchema),
  });
  const {
    fields: fieldsDocuments,
    append: appendDocument,
    move: moveDocument,
    update: updateDocument,
    remove: removeDocument,
  } = useFieldArray({
    control,
    name: 'documents',
  });
  const {
    fields: fieldsPictures,
    append: appendPicture,
    remove: removePicture,
  } = useFieldArray({
    control,
    name: 'pictures',
  });

  const onSubmit = (data) => {
    setIsPending(true);

    const formData = objToFormData.serialize(data, {
      allowEmptyArrays: true,
      noFilesWithArrayNotation: true,
      indices: true,
    });
    createProduct(formData);
  };

  if (isSmallScreen) close();

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ModalContent>
          <LeftSection>
            <Subsection>
              <Text>Nome do produto:</Text>
              <Input
                id="name"
                name="name"
                placeholder="Digite o nome do produto"
                error={errors?.name?.message ? 1 : 0}
                {...register('name')}
              />
              <ErrorMessage>{errors?.name?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>Descrição:</Text>
              <TextAreaModal
                id="description"
                name="description"
                placeholder="Descreva o produto"
                error={errors?.description?.message ? 1 : 0}
                {...register('description')}
              />
              <ErrorMessage>{errors?.description?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>Vantagens:</Text>
              <TextAreaModal
                id="advantages"
                name="advantages"
                placeholder="Descreva as vantagens do produto"
                error={errors?.advantages?.message ? 1 : 0}
                {...register('advantages')}
              />
              <ErrorMessage>{errors?.advantages?.message}</ErrorMessage>
            </Subsection>
          </LeftSection>

          <RightSection>
            <Subsection>
              <Text>Imagens:</Text>
              {fieldsPictures.length < picturesLimit && (
                <MiniText>Anexe as imagens do produto</MiniText>
              )}
              <PictureFile
                picturesLimit={picturesLimit}
                fieldsPictures={fieldsPictures}
                appendPicture={appendPicture}
                removePicture={removePicture}
              />
              <ErrorMessage>{errors?.pictures?.message}</ErrorMessage>
            </Subsection>

            <Subsection>
              <Text>Documentos:</Text>
              {/* <DocumentsContainer> */}
              <DocumentFile
                key={1}
                index={1}
                isLast={false}
                document={{}}
                control={control}
                buttonColor="white"
                moveDocument={moveDocument}
                updateDocument={updateDocument}
                removeDocument={removeDocument}
              />
              {/* {fieldsDocuments.map(({ id, file: document }, index) => (
                  <DocumentFile
                    key={id}
                    index={index}
                    isLast={index === fieldsDocuments.length - 1}
                    document={document}
                    control={control}
                    buttonColor="white"
                    moveDocument={moveDocument}
                    updateDocument={updateDocument}
                    removeDocument={removeDocument}
                  />
                ))} */}
              {/* </DocumentsContainer> */}
              {/* {fieldsDocuments.length < documentsLimit && (
                <AddFileButton
                  label="Novo Documento"
                  appendFn={appendDocument}
                  allowedMimeTypes={DOCUMENTS_CONFIG.allowedMimeTypes.join(
                    ', '
                  )}
                  sizeLimitInMB={DOCUMENTS_CONFIG.sizeLimitInMB}
                />
              )} */}
            </Subsection>

            <CategorySubsection>
              <Text>Categoria:</Text>
              {isLoadingCategories ? (
                <p>Carregando...</p>
              ) : (
                <FormSelect
                  name="category"
                  control={control}
                  errors={errors}
                  data={categories.map(({ _id, name }) => ({
                    label: name,
                    value: _id,
                  }))}
                  placeholder="Selecione a categoria"
                />
              )}
            </CategorySubsection>

            <ModalButton
              type="submit"
              disabled={isPending || isLoadingCategories}
            >
              <FiSave size={20} />
              <p>{isPending ? 'Carregando...' : 'Criar produto'}</p>
            </ModalButton>
          </RightSection>
        </ModalContent>
      </form>
    </Container>
  );
}

ModalCreateProduct.propTypes = {
  close: PropTypes.func.isRequired,
};

// import { useState } from 'react';

// import { PlusOutlined } from '@ant-design/icons';
// import { Modal, Upload } from 'antd';
// import { toast } from 'react-toastify';

// import { useDeleteFile, useUploadFile } from '../../../hooks/query/products';
// import { PICTURES_CONFIG } from '../../../utils/constants';
// import { UploadButton } from './Styles';

// function App() {
//   const [previewOpen, setPreviewOpen] = useState(false);
//   const [previewImage, setPreviewImage] = useState('');
//   const [previewTitle, setPreviewTitle] = useState('');
//   const [fileList, setFileList] = useState([]);

//   const { mutateAsync: upload } = useUploadFile();
//   const { mutate: deleteFile } = useDeleteFile();

//   const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
//   const handleRemove = ({ response: file }) => {
//     const key = file?.key;
//     return key ? deleteFile(key) : true;
//   };
//   const handlePreview = async (file) => {
//     const url = file?.url || file?.response?.url;
//     const name = file?.name || file?.response?.name;

//     setPreviewImage(url);
//     setPreviewOpen(true);
//     setPreviewTitle(name);
//   };
//   const handleCancel = () => setPreviewOpen(false);
//   const uploadImage = async (options) => {
//     const { onSuccess, onError, file, onProgress } = options;

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const { data } = await upload({ file: formData, onProgress });
//       onSuccess(data);
//     } catch (err) {
//       toast.error('Erro ao salvar o arquivo');
//       onError({ err });
//     }
//   };

//   return (
//     <>
//       <Upload
//         listType="picture-card"
//         onChange={handleChange}
//         onRemove={handleRemove}
//         onPreview={handlePreview}
//         customRequest={uploadImage}
//         accept={PICTURES_CONFIG.allowedMimeTypes.join(', ')}
//       >
//         {fileList.length < 3 && (
//           <UploadButton type="button">
//             <PlusOutlined />
//             <div>
//               Salvar
//               <br />
//               Imagem
//             </div>
//           </UploadButton>
//         )}
//       </Upload>
//       <Modal
//         open={previewOpen}
//         title={previewTitle}
//         footer={null}
//         onCancel={handleCancel}
//       >
//         <img
//           alt="example"
//           style={{
//             width: '100%',
//           }}
//           src={previewImage}
//         />
//       </Modal>
//     </>
//   );
// }
// export default App;
