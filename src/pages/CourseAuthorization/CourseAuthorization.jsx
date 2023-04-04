import { PlusOutlined, SearchOutlined } from '@ant-design/icons';

import {
  Container,
  PageTitle,
  AuthorizationDiv,
  AuthorizeButton,
  Table,
  TableHeader,
  SearchContainer,
  SearchBox,
} from './Styles';

export default function CourseAuthorization() {
  return (
    <Container>
      <PageTitle>Liberação do curso</PageTitle>
      <AuthorizationDiv>
        <AuthorizeButton>
          <PlusOutlined size="20px" />
          {'   '}
          Autorizar acesso
        </AuthorizeButton>
        <Table>
          <TableHeader>
            <h2>Email</h2>
            <h2>Validade do Acesso</h2>
            <SearchContainer>
              <SearchOutlined />
              <SearchBox placeholder="Pesquisar Email" />
            </SearchContainer>
          </TableHeader>
        </Table>
      </AuthorizationDiv>
    </Container>
  );
}
