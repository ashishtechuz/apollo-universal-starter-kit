import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MuTextField from '@material-ui/core/TextField';
import MuGrid from '@material-ui/core/Grid';

const styles = {
  wrapperField: {
    padding: '0 10px'
  }
};

const RenderField = ({ input, label, type, meta: { touched, error }, placeholder, classes }) => (
  <MuGrid item className={classes.wrapperField}>
    <MuTextField
      error={!!touched && !!error}
      fullWidth
      className={classes.textField}
      label={touched && error ? error : label}
      placeholder={placeholder || label}
      type={type}
      margin="normal"
      variant="outlined"
      {...input}
    />
  </MuGrid>
);

RenderField.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RenderField);
