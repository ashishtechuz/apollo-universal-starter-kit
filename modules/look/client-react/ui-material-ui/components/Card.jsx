import React from 'react';
import PropTypes from 'prop-types';
import MuCard from '@material-ui/core/Card';

const Card = ({ children, ...props }) => {
  return <MuCard {...props}>{children}</MuCard>;
};

Card.propTypes = {
  children: PropTypes.node
};

export default Card;
