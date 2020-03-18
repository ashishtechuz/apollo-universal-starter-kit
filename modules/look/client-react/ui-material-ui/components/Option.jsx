import React from 'react';
import PropTypes from 'prop-types';
import MuOption from '@material-ui/core/MenuItem';

const Option = ({ children, ...props }) => {
  return <MuOption {...props}>{children}</MuOption>;
};

Option.propTypes = {
  children: PropTypes.node
};

export default Option;
