import React from 'react';
import PropTypes from 'prop-types';
import MuLabel from '@material-ui/core/FormLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  label: {
    minWidth: '120px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  }
};

const Label = ({ children, classes, ...props }) => (
  <MuLabel className={classes.label} {...props}>
    {children}
  </MuLabel>
);

Label.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object
};

export default withStyles(styles)(Label);
