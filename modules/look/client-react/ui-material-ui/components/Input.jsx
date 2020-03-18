import React from 'react';
import PropTypes from 'prop-types';
import MuInput from '@material-ui/core/Input';

const Input = ({ children, ...props }) => {
  return <MuInput {...props}>{children}</MuInput>;
};

Input.propTypes = {
  children: PropTypes.node
};

export default Input;
