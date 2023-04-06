import { useState } from 'react';

import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { Navigate, useNavigate } from 'react-router-dom';

import { ModalAuthorizeAccess } from '../../components/features';
import useWindowSize from '../../hooks/useWindowSize';
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
} from './Styles';

const data = [
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
  const navigate = useNavigate();

  const [modalCourseAuthorization, setModalCourseAuthorization] =
    useState(false);

  const { width: windowWidth } = useWindowSize();
  const mobileBreakpoint = 700;

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  return (
    <Container>
      <PageTitle>Liberação do curso</PageTitle>
      <AuthorizationDiv>
        {windowWidth <= mobileBreakpoint ? (
          <StyledLink to="/administrador/loja/autorizar-acesso">
            <PlusOutlined size="20px" />
            {'   '}
            Autorizar acesso
          </StyledLink>
        ) : (
          <AuthorizeButton onClick={() => setModalCourseAuthorization(true)}>
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
          {data.map((d) => (
            <ContentRow key={d.email}>
              <p>{d.email}</p>
              <MiddleData>{d.expiration}</MiddleData>
              <TbPencil size={25} />
            </ContentRow>
          ))}
        </Table>
      </AuthorizationDiv>
      <ModalStyle
        open={modalCourseAuthorization}
        onCancel={() => setModalCourseAuthorization(false)}
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
        <ModalAuthorizeAccess />
      </ModalStyle>
    </Container>
  );
}
