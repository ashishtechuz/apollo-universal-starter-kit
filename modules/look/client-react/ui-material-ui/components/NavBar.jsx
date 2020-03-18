import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import MuGrid from '@material-ui/core/Grid';
import MuAppBar from '@material-ui/core/AppBar';
import MuText from '@material-ui/core/Typography';

import { withStyles } from '@material-ui/core/styles';

import settings from '@gqlapp/config';

const ref = { modules: null };

export const onAppCreate = modules => (ref.modules = modules);

const styles = {
  appBarItemWrapper: {
    margin: 0,
    width: '100%'
  },
  appBar: {
    marginBottom: 20,
    width: '100%'
  },
  link: {
    color: '#fff',
    '&:hover': {
      color: '#fff',
      textDecoration: 'none'
    }
  }
};

const NavBar = ({ classes }) => (
  <MuAppBar position="static" className={classes.appBar}>
    <MuGrid container justify="space-between">
      <MuGrid item>
        <MuGrid className={classes.appBarItemWrapper} container spacing={5}>
          <MuGrid item className="nav-link">
            <MuText variant="h5">
              <Link className={classes.link} to="/">
                {settings.app.name}
              </Link>
            </MuText>
          </MuGrid>
          {ref.modules.navItems}
        </MuGrid>
      </MuGrid>
      <MuGrid item>
        <MuGrid className={classes.appBarItemWrapper} container spacing={5}>
          {ref.modules.navItemsRight}

          {__DEV__ && (
            <MuGrid item className="nav-link">
              <MuText variant="button">
                <a className={classes.link} href="/graphiql">
                  GraphiQL
                </a>
              </MuText>
            </MuGrid>
          )}
        </MuGrid>
      </MuGrid>
    </MuGrid>
  </MuAppBar>
);

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
