import PropTypes from 'prop-types';
import { SubmitSpace, ErrorMessage, Button } from './Styles';

export default function SubmitButton({ name, errors, relativeWidth }) {
  const errorMessage = errors?.message;
  return (
    <SubmitSpace>
      <ErrorMessage failedToLog={!!errorMessage}>{errorMessage}</ErrorMessage>
      <Button type="submit" relativeWidth={relativeWidth}>
        {name}
      </Button>
    </SubmitSpace>
  );
}

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  relativeWidth: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  errors: PropTypes.object.isRequired,
};

SubmitButton.defaultProps = {
  relativeWidth: '100%',
};
