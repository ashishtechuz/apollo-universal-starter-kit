import React from 'react';
import PropTypes from 'prop-types';
import { NavItem } from 'reactstrap';
import ItemMenu from '@material-ui/core/MenuItem';
import styled from 'styled-components';

const MuMenuItem = styled(ItemMenu)`
  a {
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

const MenuItem = ({ children, ...props }) => {
  return <MuMenuItem {...props}>{children}</MuMenuItem>;
};

MenuItem.propTypes = {
  children: PropTypes.node
};

export default MenuItem;
