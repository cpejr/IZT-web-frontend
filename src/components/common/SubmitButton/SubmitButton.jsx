import PropTypes from 'prop-types';

import { SubmitSpace, Button } from './Styles';

export default function SubmitButton({ children, relativeWidth }) {
  return (
    <SubmitSpace>
      <Button type="submit" relativeWidth={relativeWidth}>
        {children}
      </Button>
    </SubmitSpace>
  );
}

SubmitButton.defaultProps = {
  relativeWidth: '100%',
};

SubmitButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  relativeWidth: PropTypes.string,
};
