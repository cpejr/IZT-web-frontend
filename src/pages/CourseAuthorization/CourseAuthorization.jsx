import { useState } from 'react';

import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';

import { ModalAuthorizeAccess } from '../../components/features';
import {
  Container,
  PageTitle,
  AuthorizationDiv,
  StyledLink,
  AuthorizeButton,
  Table,
  TableHeader,
  SearchContainer,
  SearchBox,
  ContentRow,
  MiddleData,
  ModalStyle,
  EditBtn,
} from './Styles';

const coursesAuth = [
  {
    email: 'jplp100@hotmail.com',
    expiration: '12/08/2023',
  },
  {
    email: 'thiago.r.fraga@hotmail.com',
    expiration: '14/06/2023',
  },
  {
    email: 'andrerobocop@hotmail.com',
    expiration: '12/12/2023',
  },
];

export default function CourseAuthorization() {
  const [modalCourseAuthorization, setModalCourseAuthorization] =
    useState(false);
  const [authorizeUser, setAuthorizeUser] = useState({});
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const openModalCourseAuthorization = (courseAuth) => {
    setAuthorizeUser(courseAuth);

    setModalCourseAuthorization(true);
  };
  const closeModalCourseAuthorization = () =>
    setModalCourseAuthorization(false);

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  return (
    <Container>
      <PageTitle>Liberação do curso</PageTitle>
      <AuthorizationDiv>
        {isSmallScreen ? (
          <StyledLink to="/administrador/autorizar-acesso">
            <PlusOutlined size="20px" />
            {'   '}
            Autorizar acesso
          </StyledLink>
        ) : (
          <AuthorizeButton onClick={openModalCourseAuthorization}>
            <PlusOutlined size="20px" />
            {'   '}
            Autorizar acesso
          </AuthorizeButton>
        )}

        <Table>
          <TableHeader>
            <h2>Email</h2>
            <h2>Validade do Acesso</h2>
            <SearchContainer>
              <HiSearch size="25px" />
              <SearchBox placeholder="Pesquisar Email" />
            </SearchContainer>
          </TableHeader>
          {coursesAuth.map((courseAuth) => (
            <ContentRow key={courseAuth.email}>
              <p title={courseAuth.email}>{courseAuth.email}</p>
              <MiddleData>{courseAuth.expiration}</MiddleData>
              <EditBtn onClick={() => openModalCourseAuthorization(courseAuth)}>
                <TbPencil size={25} />
              </EditBtn>
            </ContentRow>
          ))}
        </Table>
      </AuthorizationDiv>
      <ModalStyle
        open={modalCourseAuthorization}
        onCancel={closeModalCourseAuthorization}
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
        <ModalAuthorizeAccess
          close={closeModalCourseAuthorization}
          data={authorizeUser}
        />
      </ModalStyle>
    </Container>
  );
}
