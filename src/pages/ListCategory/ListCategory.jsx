import { useEffect, useState } from 'react';

import { CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { Loading } from '../../components/common';
import {
  ModalDeleteCategory,
  ModalEditCategory,
} from '../../components/features';
import { useSearchByNameCategories } from '../../hooks/query/categories';
import useDebounce from '../../hooks/useDebounce';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import {
  Container,
  Title,
  CategoryFilterContainer,
  Text,
  SearchProduct,
  CategoryList,
  StyledLink,
  Row,
  EditButton,
  SearchIconButton,
  SearchSection,
  ModalStyle,
  DeleteButton,
} from './Styles';
import { TranslateText } from './translations';
import translateText from '../../utils/translateAPI';
import { buildGetCategoriesErrorMessage } from './utils';

export default function ListCategory() {
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });
  const [modalEditCategory, setModalEditCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState({});
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);
  const [categoryId, setCategoryId] = useState('');
  const [name, setName] = useState('');
  const debouncedName = useDebounce(name);

  const { globalLanguage } = useGlobalLanguage();
  const translateLanguage = globalLanguage.toLowerCase();
  const translations = TranslateText({ globalLanguage });

  const { data: categories, isLoading } = useSearchByNameCategories({
    name: debouncedName,
    onError: (err) => {
      const errorMessage = buildGetCategoriesErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  const openModalEditCategory = (category) => {
    setSelectedCategory(category);
    setModalEditCategory(true);
  };
  const closeModalEditCategory = () => setModalEditCategory(false);

  const openModalDeleteCategory = (_id) => {
    setCategoryId(_id);
    setModalDeleteCategory(true);
  };
  const closeModalDeleteCategory = () => setModalDeleteCategory(false);

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  return (
    <Container>
      <Title>{translations.title}</Title>

      <CategoryFilterContainer>
        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct
            onChange={(e) => setName(e.target.value)}
            placeholder={translations.searchPlaceholder}
          />
        </SearchSection>
      </CategoryFilterContainer>

      {isLoading ? (
        <Loading />
      ) : (
        <CategoryList>
          {categories?.map((category) => (
            <Row key={category._id}>
              <Text>{category.name}</Text>
              {isSmallScreen ? (
                <StyledLink
                  to="/administrador/editar-categoria"
                  state={category}
                >
                  <TbPencil size={30} />
                </StyledLink>
              ) : (
                <EditButton>
                  <TbPencil
                    onClick={() => openModalEditCategory(category)}
                    size={30}
                  />
                </EditButton>
              )}
              <DeleteButton>
                <DeleteOutlined
                  onClick={() => openModalDeleteCategory(category._id)}
                />
              </DeleteButton>
            </Row>
          ))}
        </CategoryList>
      )}

      <ModalStyle
        open={modalEditCategory}
        onCancel={closeModalEditCategory}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalCloseButton}
        bodyStyle={{
          alignItems: 'center',
          justifyContent: 'center',
          background: '#123645',
          color: 'white',
          padding: 0,
          borderRadius: 'none',
        }}
        centered
        destroyOnClose
      >
        <ModalEditCategory
          category={selectedCategory}
          close={closeModalEditCategory}
        />
      </ModalStyle>
      <ModalStyle
        open={modalDeleteCategory}
        onCancel={closeModalDeleteCategory}
        footer={null}
        width={500}
        closeIcon={modalCloseButton}
        destroyOnClose
        centered
        bodyStyle={{
          background: '#123645',
          color: 'white',
        }}
      >
        <ModalDeleteCategory
          _id={categoryId}
          close={closeModalDeleteCategory}
        />
      </ModalStyle>
    </Container>
  );
}
