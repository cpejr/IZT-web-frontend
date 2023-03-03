import PropTypes from 'prop-types';
import { SubmitSpace, ErrorMessage, Button } from './Styles';

export default function SubmitButton({
  name,
  submitErrorMessage,
  relativeWidth,
}) {
  return (
    <SubmitSpace>
      <ErrorMessage submitErrorMessage={!!submitErrorMessage}>
        {submitErrorMessage}
      </ErrorMessage>
      <Button type="submit" relativeWidth={relativeWidth}>
        {name}
      </Button>
    </SubmitSpace>
  );
}

SubmitButton.defaultProps = {
  relativeWidth: '100%',
};

SubmitButton.propTypes = {
  relativeWidth: PropTypes.string,
  name: PropTypes.string.isRequired,
  submitErrorMessage: PropTypes.string.isRequired,
};
