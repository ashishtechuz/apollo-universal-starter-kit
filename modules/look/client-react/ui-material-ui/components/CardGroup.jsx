import React from 'react';
import PropTypes from 'prop-types';
import MuCardContent from '@material-ui/core/CardContent';

const CardGroup = ({ children, ...props }) => {
  return <MuCardContent {...props}>{children}</MuCardContent>;
};

CardGroup.propTypes = {
  children: PropTypes.node
};

export default CardGroup;
