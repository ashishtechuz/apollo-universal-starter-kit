import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'formik';
import { get as getPath } from 'lodash';
import Dropzone from 'react-dropzone';

class UploadAdapter extends Component {
  static propTypes = {
    formik: PropTypes.object.isRequired,
    component: PropTypes.func,
    onChange: PropTypes.func,
    onChangeText: PropTypes.func,
    name: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    multiple: PropTypes.bool,
    label: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);
    this.props = props;
  }

  onChange = value => {
    const { onChange, name } = this.props;
    if (onChange) {
      onChange(value);
    } else {
      this.props.formik.setFieldValue(name, value);
    }
  };

  render() {
    let { formik, name, disabled, value = '', component, multiple = true } = this.props;
    value = value || '';
    const meta = {
      touched: getPath(formik.touched, name),
      error: getPath(formik.errors, name)
    };

    const input = {
      name,
      value,
      disabled,
      multiple
    };

    const changeEventHandler = 'onDrop';
    input[changeEventHandler] = this.onChange;
    return React.createElement(component, {
      ...this.props,
      input,
      meta
    });
  }
}

export default connect(UploadAdapter);

/*
  // return (
    //   <Dropzone multiple={multiple} onDrop={this.onChange}>
    //     <p>{label}</p>
    //   </Dropzone>
    // );
    
 */
