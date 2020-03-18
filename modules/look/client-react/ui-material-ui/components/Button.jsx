import React from 'react';
import PropTypes from 'prop-types';
import MuButton from '@material-ui/core/Button';

const Button = ({ children, color, variant = 'contained', size, ...props }) => {
  let buttonSize = 'medium';

  if (size === 'sm') {
    buttonSize = 'small';
  } else if (size === 'lg') {
    buttonSize = 'large';
  }
  return (
    <MuButton variant={variant} {...props} size={buttonSize} color="primary">
      {children}
    </MuButton>
  );
};

Button.propTypes = {
  children: PropTypes.node
};

export default Button;
