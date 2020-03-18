import React from 'react';
import PropTypes from 'prop-types';
import MuListGroup from '@material-ui/core/List';

const ListGroup = ({ children, ...props }) => {
  return <MuListGroup {...props}>{children}</MuListGroup>;
};

ListGroup.propTypes = {
  children: PropTypes.node
};

export default ListGroup;
