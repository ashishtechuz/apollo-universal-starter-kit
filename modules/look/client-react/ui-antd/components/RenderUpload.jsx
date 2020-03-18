import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';
import Dropzone from 'react-dropzone';
import { Form } from 'antd';

const FormItem = Form.Item;
const RenderUpload = ({ input, name, label, type, meta: { touched, error }, children }) => {
  let validateStatus = '';
  if (touched && error) {
    validateStatus = 'error';
  }

  return (
    <FormItem label={label} validateStatus={validateStatus} help={touched && error}>
      <div>
        <Dropzone className={`ui-dropzone ${touched && error ? 'has-error' : ''}`} {...input}>
          {children}
        </Dropzone>
      </div>
    </FormItem>
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
