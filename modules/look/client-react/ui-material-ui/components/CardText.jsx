import React from 'react';
import PropTypes from 'prop-types';
import MuCardText from '@material-ui/core/Typography';

const CardText = ({ children, ...props }) => {
  return <MuCardText {...props}>{children}</MuCardText>;
};

CardText.propTypes = {
  children: PropTypes.node
};

export default CardText;
