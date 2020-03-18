import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import { translate } from '@gqlapp/i18n-client-react';
import { FieldAdapter as Field, UploadAdapter as Upload } from '@gqlapp/forms-client-react';

import { required, validate } from '@gqlapp/validation-common-react';
import { Form, RenderField, Button, RenderUpload } from '@gqlapp/look-client-react';

const postFormSchema = {
  title: [required],
  content: [required],
  image: [required]
};

const PostForm = ({ values, handleSubmit, submitting, handleChange, errors, ...props }) => {
  return (
    <Form name="post" onSubmit={handleSubmit}>
      <Field
        name="title"
        component={RenderField}
        type="text"
        label={props.t('post.field.title')}
        value={values.title}
      />
      <Field
        name="content"
        component={RenderField}
        type="text"
        label={props.t('post.field.content')}
        value={values.content}
      />
      <Upload
        component={RenderUpload}
        value={values.image}
        name="image"
        multiple={false}
        label={props.t('post.field.image')}
      >
        {values.image && typeof values.image === 'string' ? (
          <img style={{ width: '100%', height: '100%' }} src={`/${values.image}`} />
        ) : values.image && Array.isArray(values.image) ? (
          <img style={{ width: '100%', height: '100%' }} src={`${values.image[0].preview}`} />
        ) : null}
      </Upload>
      <Button color="primary" type="submit" disabled={submitting}>
        {props.t('post.btn.submit')}
      </Button>
    </Form>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
  onSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  submitting: PropTypes.bool,
  values: PropTypes.object,
  post: PropTypes.object,
  t: PropTypes.func
};

const PostFormWithFormik = withFormik({
  mapPropsToValues: props => ({
    title: props.post && props.post.title,
    content: props.post && props.post.content,
    image: props.post && props.post.image
  }),
  validate: values => validate(values, postFormSchema),
  handleSubmit(
    values,
    {
      props: { onSubmit }
    }
  ) {
    onSubmit(values);
  },
  enableReinitialize: true,
  displayName: 'PostForm' // helps with React DevTools
});

export default translate('post')(PostFormWithFormik(PostForm));
