import PropTypes from 'prop-types';

import {
  SubmitSpace,
  // ErrorMessage,
  Button,
} from './Styles';

export default function SubmitButton({
  name = '100%',
  // submitErrorMessage = '',
  relativeWidth,
}) {
  return (
    <SubmitSpace>
      {/* {!!submitErrorMessage && (
        <ErrorMessage submitErrorMessage={!!submitErrorMessage}>
          {submitErrorMessage}
        </ErrorMessage>
      )} */}
      <Button type="submit" relativeWidth={relativeWidth}>
        {name}
      </Button>
    </SubmitSpace>
  );
}

SubmitButton.defaultProps = {
  relativeWidth: '100%',
  // submitErrorMessage: '',
};

SubmitButton.propTypes = {
  name: PropTypes.string.isRequired,
  relativeWidth: PropTypes.string,
  // submitErrorMessage: PropTypes.string,
};
