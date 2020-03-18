import React from 'react';
import PropTypes from 'prop-types';
import MuCardTitle from '@material-ui/core/CardHeader';

const CardTitle = ({ children, ...props }) => {
  return <MuCardTitle title={children} {...props} />;
};

CardTitle.propTypes = {
  children: PropTypes.node
};

export default CardTitle;
