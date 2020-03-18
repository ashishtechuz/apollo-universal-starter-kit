import React from 'react';
import PropTypes from 'prop-types';
import MuGrid from '@material-ui/core/Grid';

const Row = ({ children, ...props }) => (
  <MuGrid container {...props}>
    {children}
  </MuGrid>
);

Row.propTypes = {
  children: PropTypes.node
};

export default Row;
