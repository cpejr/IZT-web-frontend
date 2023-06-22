import { useState } from 'react';

import { PlusOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { HiSearch } from 'react-icons/hi';
import { TbPencil } from 'react-icons/tb';
import { useMediaQuery } from 'react-responsive';
import { toast } from 'react-toastify';

import { Loading } from '../../components/common';
import {
  ModalDeleteAuthorizeSoftwareAccess,
  ModalAuthorizeSoftwareAccess,
  ModalEditAuthorizeSoftwareAccess,
} from '../../components/features';
import { useGetUsersWithSoftwareAccess } from '../../hooks/query/users';
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
import { buildGetSoftwareAccessErrorMessage } from './utils';

export default function SoftwareAuthorization() {
  const [modalSoftwareAccessAuthorization, setModalSoftwareAuthorization] =
    useState(false);
  const [
    modalEditSoftwareAccessAuthorization,
    setModalEditSoftwareAuthorization,
  ] = useState(false);
  const [modalDeleteAuthorizeAccess, setModalDeleteAuthorizeSoftwareAccess] =
    useState(false);
  const [userSoftwareId, setUserSoftwareId] = useState('');
  const [authorizeUser, setAuthorizeUser] = useState({});
  const isSmallScreen = useMediaQuery({ maxWidth: 700 });

  // Backend calls
  const { data: users, isLoading: isLoadingUsers } =
    useGetUsersWithSoftwareAccess({
      onError: (err) => {
        const errorMessage = buildGetSoftwareAccessErrorMessage(err);

        toast.error(errorMessage);
      },
    });

  // Modal Software Authorization Functions
  const openModalSoftwareAuthorization = (softwareAuth) => {
    setAuthorizeUser(softwareAuth);

    setModalSoftwareAuthorization(true);
  };
  const closeModalSoftwareAuthorization = () =>
    setModalSoftwareAuthorization(false);

  // Modal Edit Software Authorization Functions
  const openModalEditSoftwareAuthorization = (softwareAuth) => {
    setAuthorizeUser(softwareAuth);

    setModalEditSoftwareAuthorization(true);
  };
  const closeModalEditSoftwareAccessAuthorization = () =>
    setModalEditSoftwareAuthorization(false);

  // Modal Delete Software Authorization Functions
  const openModalDeleteAuthorizeSoftwareAccess = (_id) => {
    setUserSoftwareId(_id);
    setModalDeleteAuthorizeSoftwareAccess(true);
  };
  const closeModalDeleteAuthorizeSoftwareAccess = () =>
    setModalDeleteAuthorizeSoftwareAccess(false);

  const modalCloseButton = <CloseOutlined style={{ color: 'white' }} />;

  return (
    <Container>
      <PageTitle>Liberação do Software</PageTitle>
      <AuthorizationDiv>
        {isSmallScreen ? (
          <StyledLink to="/administrador/liberacao-software">
            <PlusOutlined size="2rem" />
            {'   '}
            Autorizar acesso
          </StyledLink>
        ) : (
          <AuthorizeButton onClick={openModalSoftwareAuthorization}>
            <PlusOutlined size="2rem" />
            {'   '}
            Autorizar acesso
          </AuthorizeButton>
        )}

        <Table>
          <TableHeader>
            <h2>Email</h2>
            <h2>Validade do Acesso</h2>
            <SearchContainer>
              <HiSearch size="2rem" />
              <SearchBox placeholder="Pesquisar Email" />
            </SearchContainer>
          </TableHeader>

          {isLoadingUsers ? (
            <Loading />
          ) : (
            <div>
              {users?.map((softwareAccess) => {
                return (
                  <ContentRow key={softwareAccess?._id}>
                    <p title={softwareAccess.email}>{softwareAccess.email}</p>

                    <MiddleData>
                      {formatDate({ value: softwareAccess.softwareAccess }) ||
                        'Sem Acesso'}
                    </MiddleData>

                    {isSmallScreen ? (
                      <EditLink
                        to="/administrador/editar-autorizacao-de-acesso-software"
                        state={softwareAccess}
                      >
                        <TbPencil size={30} />
                      </EditLink>
                    ) : (
                      <EditBtn
                        onClick={() =>
                          openModalEditSoftwareAuthorization(softwareAccess)
                        }
                      >
                        <TbPencil size={30} />
                      </EditBtn>
                    )}

                    <DeleteButton>
                      <DeleteOutlined
                        onClick={() =>
                          openModalDeleteAuthorizeSoftwareAccess(
                            softwareAccess._id
                          )
                        }
                      />
                    </DeleteButton>
                  </ContentRow>
                );
              })}
            </div>
          )}
        </Table>
      </AuthorizationDiv>

      <ModalStyle
        open={modalSoftwareAccessAuthorization}
        onCancel={closeModalSoftwareAuthorization}
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
        <ModalAuthorizeSoftwareAccess close={closeModalSoftwareAuthorization} />
      </ModalStyle>

      <ModalStyle
        open={modalEditSoftwareAccessAuthorization}
        onCancel={closeModalEditSoftwareAccessAuthorization}
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
        <ModalEditAuthorizeSoftwareAccess
          close={closeModalEditSoftwareAccessAuthorization}
          authorizeUser={authorizeUser}
        />
      </ModalStyle>

      <ModalStyle
        open={modalDeleteAuthorizeAccess}
        onCancel={closeModalDeleteAuthorizeSoftwareAccess}
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
        <ModalDeleteAuthorizeSoftwareAccess
          _id={userSoftwareId}
          close={closeModalDeleteAuthorizeSoftwareAccess}
        />
      </ModalStyle>
    </Container>
  );
}
