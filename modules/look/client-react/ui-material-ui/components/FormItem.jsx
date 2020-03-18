import React from 'react';
import PropTypes from 'prop-types';
import MuFormControl from '@material-ui/core/FormControl';
import MuFormLabel from '@material-ui/core/FormLabel';
import MuFormGroup from '@material-ui/core/FormGroup';

const FormItem = ({ children, label, ...props }) => {
  return (
    <MuFormControl {...props}>
      <MuFormGroup>
        {label && (
          <MuFormLabel>
            {label}
            :&nbsp;
          </MuFormLabel>
        )}
        {children}
      </MuFormGroup>
    </MuFormControl>
  );
};

FormItem.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string
};

export default FormItem;
