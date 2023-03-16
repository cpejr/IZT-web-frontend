/* eslint-disable no-underscore-dangle */
import { useState } from 'react';
import { CloseOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { useSearchByNameCategories } from '../../../hooks/query/categories';
import useWindowSize from '../../../hooks/useWindowSize';

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
} from './Styles';

import ModalEditCategory from '../ModalEditCategory/ModalEditCategory';
import useDebounce from '../../../hooks/useDebounce';

export default function AdminListCategory() {
  const [name, setName] = useState('');
  const debouncedName = useDebounce(name);
  const { data: categories } = useSearchByNameCategories({
    name: debouncedName,
  });
  const [data, setData] = useState({
    id: '',
    name: '',
  });

  const modalButton = {
    closeIcon: <CloseOutlined style={{ color: 'white' }} />,
  };

  const [modalEditCategory, setModalEditCategory] = useState(false);

  const closeModalEditCategory = () => {
    setModalEditCategory(false);
  };

  const { width: windowWidth } = useWindowSize();
  const breakpoint = 700;

  async function handleOpenModal(categoryId, categoryName) {
    setData({ id: categoryId, name: categoryName });
    setModalEditCategory(true);
  }
  const navigate = useNavigate();
  async function openEditCategoryPage(categoryId, categoryName) {
    navigate('/administrador/editar-categoria', {
      state: {
        id: categoryId,
        name: categoryName,
      },
    });
  }

  return (
    <Container>
      <Title>Lista de categorias</Title>

      <CategoryFilterContainer>
        <SearchSection>
          <SearchIconButton>
            <HiSearch size={25} />
          </SearchIconButton>
          <SearchProduct
            onChange={(e) => setName(e.target.value)}
            placeholder="Pesquisar categoria"
          />
        </SearchSection>
      </CategoryFilterContainer>

      <CategoryList>
        {categories?.map((category) => (
          <Row key={category._id}>
            <Text>{category.name}</Text>

            {windowWidth <= breakpoint ? (
              <StyledLink
                onClick={() =>
                  openEditCategoryPage(category._id, category.name)
                }
              >
                <TbPencil size={30} />
              </StyledLink>
            ) : (
              <EditButton>
                <TbPencil
                  onClick={() => handleOpenModal(category._id, category.name)}
                  size={30}
                />
              </EditButton>
            )}
          </Row>
        ))}
      </CategoryList>

      <ModalStyle
        open={modalEditCategory}
        onCancel={closeModalEditCategory}
        width={500}
        height={250}
        padding={0}
        footer={null}
        closeIcon={modalButton.closeIcon}
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
          categoryId={data.id}
          categoryName={data.name}
          close={closeModalEditCategory}
        />
      </ModalStyle>
    </Container>
  );
}
