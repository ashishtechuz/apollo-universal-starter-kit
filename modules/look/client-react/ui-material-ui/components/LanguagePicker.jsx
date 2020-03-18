import React from 'react';
import PropTypes from 'prop-types';
import ExpandMore from '@material-ui/icons/ExpandMore';
import MuMenu from '@material-ui/core/Menu';
import MuMenuItem from '@material-ui/core/MenuItem';
import MuText from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  paddingNone: {
    padding: '0'
  },
  title: {
    cursor: 'pointer',
    color: '#fff',
    opacity: '0.8',
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center'
  }
};

class LanguagePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      selected: props.i18n.language.slice(0, 2).toUpperCase(),
      options: Object.keys(props.i18n.store.data)
    };
  }

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = lang => {
    this.props.i18n.changeLanguage(lang);
    this.setState({ selected: lang.slice(0, 2).toUpperCase(), anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes, i18n } = this.props;
    const { anchorEl, options, selected } = this.state;
    const languages = Object.keys(i18n.store.data);

    return (
      <React.Fragment>
        <MuText component="div" className={classes.title} onClick={this.handleClickListItem}>
          {selected} <ExpandMore />
        </MuText>
        <MuMenu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          className={classes.paddingNone}
        >
          {options.map(option => (
            <MuMenuItem
              key={option}
              selected={option.slice(0, 2).toUpperCase() === selected}
              onClick={() => this.handleMenuItemClick(option)}
            >
              {option.slice(0, 2).toUpperCase()}
            </MuMenuItem>
          ))}
        </MuMenu>
      </React.Fragment>
    );
  }
}

LanguagePicker.propTypes = {
  i18n: PropTypes.object.isRequired
};

export default withStyles(styles)(LanguagePicker);
