import React from 'react';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';
import MuGrid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import MuTextHelper from '@material-ui/core/FormHelperText';
import MuLabel from '@material-ui/core/FormLabel';

const styles = {
  wrapperField: {
    padding: '0 10px',
    marginBottom: 20
  }
};

const RenderUpload = ({ input, name, label, type, meta: { touched, error }, children, classes }) => {
  let valid = true;
  if (touched && error) {
    valid = false;
  }

  const labelId = name + '-label';

  return (
    <MuGrid item className={classes.wrapperField}>
      {label && <MuLabel id={labelId}>{label}</MuLabel>}
      <div>
        <Dropzone className={`ui-dropzone ${touched && error ? 'has-error' : ''}`} {...input}>
          {children}
        </Dropzone>
        {touched &&
          (error && (
            <MuTextHelper error filled>
              {error}
            </MuTextHelper>
          ))}
      </div>
    </MuGrid>
  );
};

RenderUpload.propTypes = {
  input: PropTypes.object,
  name: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.oneOfType(['array', null])
};

export default withStyles(styles)(RenderUpload);
