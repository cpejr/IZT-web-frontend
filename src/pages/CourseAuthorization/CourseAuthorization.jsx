import { useState } from 'react';

import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import {
  ModalAuthorizeAccess,
  ModalEditAuthorizeAccess,
} from '../../components/features';
import { useGetUserCourses } from '../../hooks/query/userCourse';
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
import { buildGetUserCoursesErrorMessage } from './utils';

export default function CourseAuthorization() {
  const [modalCourseAuthorization, setModalCourseAuthorization] =
    useState(false);
  const [modalEditCourseAuthorization, setModalEditCourseAuthorization] =
    useState(false);
  const [authorizeUser, setAuthorizeUser] = useState({});
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { data: userCourses, isLoading: isLoadingUsers } = useGetUserCourses({
    onError: (err) => {
      const errorMessage = buildGetUserCoursesErrorMessage(err);

      toast.error(errorMessage);
    },
  });

  // Modal Course Authorization Functions
  const openModalCourseAuthorization = (courseAuth) => {
    setAuthorizeUser(courseAuth);

    setModalCourseAuthorization(true);
  };
  const closeModalCourseAuthorization = () =>
    setModalCourseAuthorization(false);

  // Modal Edit Course Authorization Functions
  const openModalEditCourseAuthorization = (courseAuth) => {
    setAuthorizeUser(courseAuth);

    setModalEditCourseAuthorization(true);
  };
  const closeModalEditCourseAuthorization = () =>
    setModalEditCourseAuthorization(false);

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

          {userCourses?.map((userCourse) => (
            <ContentRow key={userCourse._id}>
              <p title={userCourse.user.email}>{userCourse.user.email}</p>
              <MiddleData>{userCourse.expiresAt}</MiddleData>
              <EditBtn
                onClick={() => openModalEditCourseAuthorization(userCourse)}
              >
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

      <ModalStyle
        open={modalEditCourseAuthorization}
        onCancel={closeModalEditCourseAuthorization}
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
        <ModalEditAuthorizeAccess
          close={closeModalEditCourseAuthorization}
          data={authorizeUser}
        />
      </ModalStyle>
    </Container>
  );
}
