import PropTypes from 'prop-types';

import { FormsContact } from '../../components/features';
import { Container, UpperDiv, TextDiv } from './Styles';
import PageText from './utils';

export default function AccessDenied({ texts }) {
  // texts prop define if the user tried to access the software page or the course page
  // texts is required and can be only course or software
  const pageContent = PageText(texts);
  return (
    <Container>
      <UpperDiv image={pageContent.imageURL}>
        <TextDiv>
          <h1>{pageContent.title}</h1>
        </TextDiv>
        <TextDiv>
          <p>{pageContent.text}</p>
        </TextDiv>
      </UpperDiv>
      <FormsContact
        title={pageContent.formTitle}
        smallTitle={pageContent.formTitle}
      />
    </Container>
  );
}

AccessDenied.propTypes = {
  texts: PropTypes.string.isRequired,
};
