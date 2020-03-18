import React from 'react';
import PropTypes from 'prop-types';
import MuFormControl from '@material-ui/core/FormControl';
import MuLabel from '@material-ui/core/FormControlLabel';
import MuCheckBox from '@material-ui/core/Checkbox';
import MuHelperText from '@material-ui/core/FormHelperText';
import MuGrid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapperField: {
    padding: '0 10px'
  }
};

const RenderCheckBox = ({ classes, input, label, meta: { touched, error } }) => (
  <MuGrid item className={classes.wrapperField}>
    <MuFormControl>
      <MuLabel control={<MuCheckBox {...input} color="primary" />} label={label} />
      {touched && (error && <MuHelperText>{error}</MuHelperText>)}
    </MuFormControl>
  </MuGrid>
);

RenderCheckBox.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  classes: PropTypes.object,
  meta: PropTypes.object
};

export default withStyles(styles)(RenderCheckBox);
