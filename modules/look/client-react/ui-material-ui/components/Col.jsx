import React from 'react';
import PropTypes from 'prop-types';
import MuCol from '@material-ui/core/Grid';

const Col = ({ children, ...props }) => {
  return (
    <MuCol item {...props}>
      {children}
    </MuCol>
  );
};

Col.propTypes = {
  children: PropTypes.node
};

export default Col;
