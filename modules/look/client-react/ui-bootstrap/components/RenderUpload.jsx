import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Dropzone from 'react-dropzone';

const RenderUpload = ({ input, name, label, type, meta: { touched, error }, children }) => {
  let valid = true;
  if (touched && error) {
    valid = false;
  }

  const labelId = name + '-label';

  return (
    <FormGroup>
      {label && <Label id={labelId}>{label}</Label>}
      <div>
        <Dropzone className={`ui-dropzone ${touched && error ? 'has-error' : ''}`} {...input}>
          {children}
        </Dropzone>
        {touched && (error && <FormFeedback className="d-block">{error}</FormFeedback>)}
      </div>
    </FormGroup>
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

export default RenderUpload;
