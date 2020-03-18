import React from 'react';
import PropTypes from 'prop-types';
import MuAlert from '@material-ui/lab/Alert';

const Alert = ({ children, color, ...props }) => {
  if (color === 'error') {
    color = 'danger';
  }
  return (
    <MuAlert {...props} severity={color}>
      {children}
    </MuAlert>
  );
};

Alert.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string
};

export default Alert;
