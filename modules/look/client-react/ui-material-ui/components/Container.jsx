import React from 'react';
import PropTypes from 'prop-types';
import MuContainer from '@material-ui/core/Grid';

const Container = ({ children, ...props }) => {
  return (
    <MuContainer container {...props}>
      {children}
    </MuContainer>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
