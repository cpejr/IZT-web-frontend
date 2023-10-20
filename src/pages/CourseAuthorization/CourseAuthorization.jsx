import { useState } from 'react';

import { PlusOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { Loading } from '../../components/common';
import {
  ModalDeleteAuthorizeAccess,
  ModalAuthorizeAccess,
  ModalEditAuthorizeAccess,
} from '../../components/features';
import { useGetUserCourses } from '../../hooks/query/userCourse';
import { useGlobalLanguage } from '../../stores/globalLanguage';
import formatDate from '../../utils/formatDate';
import {
  Container,
  PageTitle,
  AuthorizationDiv,
  StyledLink,
  EditLink,
  AuthorizeButton,
  Table,
  TableHeader,
  SearchContainer,
  SearchBox,
  ContentRow,
  MiddleData,
  ModalStyle,
  EditBtn,
  DeleteButton,
} from './Styles';
import { TranslateText } from './translations';
import { buildGetUserCoursesErrorMessage } from './utils';
import { buildGetUserCoursesErrorMessageDE } from './utilsDE';
import { buildGetUserCoursesErrorMessageEN } from './utilsEN';

export default function CourseAuthorization() {
  const [modalCourseAuthorization, setModalCourseAuthorization] =
    useState(false);
  const [modalEditCourseAuthorization, setModalEditCourseAuthorization] =
    useState(false);
  const [modalDeleteAuthorizeAccess, setModalDeleteAuthorizeAccess] =
    useState(false);
  const [userCourseId, setUserCourseId] = useState('');
  const [authorizeUser, setAuthorizeUser] = useState({});
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  const { globalLanguage } = useGlobalLanguage();
  const translations = TranslateText({ globalLanguage });

  // Backend calls
  const { data: userCourses, isLoading: isLoadingUsers } = useGetUserCourses({
    onError: (err) => {
      if (globalLanguage === 'EN') {
        const errorMessage = buildGetUserCoursesErrorMessageEN(err);
        toast.error(errorMessage);
      } else if (globalLanguage === 'DE') {
        const errorMessage = buildGetUserCoursesErrorMessageDE(err);
        toast.error(errorMessage);
      } else {
        const errorMessage = buildGetUserCoursesErrorMessage(err);
        toast.error(errorMessage);
      }
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

  // Modal Delete Course Authorization Functions
  const openModalDeleteAuthorizeAccess = (_id) => {
    setUserCourseId(_id);
    setModalDeleteAuthorizeAccess(true);
  };
  const closeModalDeleteAuthorizeAccess = () =>
    setModalDeleteAuthorizeAccess(false);

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;
  return (
    <Container>
      <PageTitle>{translations.pageTitle}</PageTitle>
      <AuthorizationDiv>
        {isSmallScreen ? (
          <StyledLink to="/administrador/autorizar-acesso">
            <PlusOutlined size="2rem" />
            {'   '}
            {translations.authorizeAccessLabel}
          </StyledLink>
        ) : (
          <AuthorizeButton onClick={openModalCourseAuthorization}>
            <PlusOutlined size="2rem" />
            {'   '}
            {translations.authorizeAccessLabel}
          </AuthorizeButton>
        )}

        <Table>
          <TableHeader>
            <h2>{translations.emailHeader}</h2>
            <h2>{translations.accessValidityHeader}</h2>
            <SearchContainer>
              <HiSearch size="2rem" />
              <SearchBox placeholder={translations.searchPlaceholder} />
            </SearchContainer>
          </TableHeader>

          {isLoadingUsers ? (
            <Loading />
          ) : (
            <div>
              {userCourses?.map((userCourse) => (
                <ContentRow key={userCourse._id}>
                  <p title={userCourse.user.email}>{userCourse.user.email}</p>
                  <MiddleData>
                    {formatDate({ value: userCourse.expiresAt })}
                  </MiddleData>

                  {isSmallScreen ? (
                    <EditLink
                      to="/administrador/editar-autorizacao-de-acesso"
                      state={userCourse}
                    >
                      <TbPencil size={30} />
                    </EditLink>
                  ) : (
                    <EditBtn
                      onClick={() =>
                        openModalEditCourseAuthorization(userCourse)
                      }
                    >
                      <TbPencil size={30} />
                    </EditBtn>
                  )}

                  <DeleteButton>
                    <DeleteOutlined
                      onClick={() =>
                        openModalDeleteAuthorizeAccess(userCourse._id)
                      }
                    />
                  </DeleteButton>
                </ContentRow>
              ))}
            </div>
          )}
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
          language={globalLanguage}
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
          authorizeUser={authorizeUser}
        />
      </ModalStyle>

      <ModalStyle
        open={modalDeleteAuthorizeAccess}
        onCancel={closeModalDeleteAuthorizeAccess}
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
        <ModalDeleteAuthorizeAccess
          _id={userCourseId}
          close={closeModalDeleteAuthorizeAccess}
        />
      </ModalStyle>
    </Container>
  );
}
