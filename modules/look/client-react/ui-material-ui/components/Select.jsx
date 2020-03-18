import React from 'react';
import PropTypes from 'prop-types';
import MuSelect from '@material-ui/core/Select';

import { withStyles } from '@material-ui/core/styles';

const styles = {
  select: {
    minWidth: '120px'
  }
};

class Select extends React.Component {
  state = {
    value: this.props.defaultValue
  };

  handleChange = event => {
    this.setState(() => ({ value: event.target.value }));
    this.props.onChange(event);
  };

  render() {
    const { classes, children } = this.props;
    return (
      <MuSelect className={classes.select} value={this.state.value} onChange={this.handleChange}>
        {children}
      </MuSelect>
    );
  }
}

Select.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  onChange: PropTypes.func,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default withStyles(styles)(Select);
