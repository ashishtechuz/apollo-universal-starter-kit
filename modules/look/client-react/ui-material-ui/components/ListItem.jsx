import React from 'react';
import PropTypes from 'prop-types';
import MuListItem from '@material-ui/core/ListItem';

const ListItem = ({ children, ...props }) => {
  return <MuListItem {...props}>{children}</MuListItem>;
};

ListItem.propTypes = {
  children: PropTypes.node
};

export default ListItem;
