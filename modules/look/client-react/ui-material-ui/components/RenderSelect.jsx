import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import MuOutlined from '@material-ui/core/OutlinedInput';
import MuLabel from '@material-ui/core/InputLabel';
import MuFormText from '@material-ui/core/FormHelperText';
import MuFormControl from '@material-ui/core/FormControl';
import MuSelect from '@material-ui/core/Select';
import MuGrid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  wrapperField: {
    padding: '15px 10px 10px'
  }
};

class RenderSelect extends React.Component {
  state = {
    value: this.props.value,
    labelWidth: 0
  };

  componentDidMount() {
    /*eslint-disable */
    this.setState({
      labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth
    });
    /*eslint-enable */
  }

  handleChange = event => {
    this.setState(() => ({ value: event.target.value }));
    this.props.input.onChange(event);
  };

  render() {
    const {
      classes,
      input: { onChange, ...restInput },
      label,
      children,
      meta: { touched, error }
    } = this.props;

    return (
      <MuGrid item className={classes.wrapperField}>
        <MuFormControl variant="outlined" fullWidth>
          <MuLabel
            ref={ref => {
              this.InputLabelRef = ref;
            }}
          >
            {label}
          </MuLabel>
          <MuSelect
            value={this.state.age}
            onChange={this.handleChange}
            {...restInput}
            input={<MuOutlined labelWidth={this.state.labelWidth} />}
          >
            {children}
          </MuSelect>
          {touched && (error && <MuFormText>{error}</MuFormText>)}
        </MuFormControl>
      </MuGrid>
    );
  }
}

RenderSelect.propTypes = {
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  children: PropTypes.node,
  classes: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default withStyles(styles)(RenderSelect);
