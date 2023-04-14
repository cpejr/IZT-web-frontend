import PropTypes from 'prop-types';

import { SubmitSpace, Button } from './Styles';

export default function SubmitButton({ name = '100%', relativeWidth }) {
  return (
    <SubmitSpace>
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
  name: PropTypes.string.isRequired,
  relativeWidth: PropTypes.string,
};
