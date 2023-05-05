import PropTypes from 'prop-types';

import { FormsContact } from '../../components/features';
import { Container, UpperDiv, TextDiv } from './Styles';
import PageText from './utils';

export default function AccessDenied({ texts }) {
  const pageContent = PageText(texts);
  return (
    <Container>
      <UpperDiv>
        <TextDiv>
          <h1>{pageContent.title}</h1>
        </TextDiv>
        <TextDiv>
          <p>{pageContent.text}</p>
        </TextDiv>
      </UpperDiv>
      <FormsContact title={pageContent.formTitle} smallTitle={pageContent.formTitle} />
    </Container>
  );
}

AccessDenied.propTypes = {
  texts: PropTypes.string.isRequired,
};
