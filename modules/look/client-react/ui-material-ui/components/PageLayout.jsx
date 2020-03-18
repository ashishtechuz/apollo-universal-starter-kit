import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import settings from '@gqlapp/config';

import MuGrid from '@material-ui/core/Grid';
import NavBar from './NavBar';
import styles from '../styles/styles.scss';

const footerHeight = '40px';

const Footer = styled.footer`
  margin-top: 10px;
  line-height: ${footerHeight};
  height: ${footerHeight};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  max-width: 1140px;
`;

const PageContainer = styled(MuGrid)`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`;

class PageLayout extends React.Component {
  render() {
    const { children, navBar } = this.props;
    return (
      <PageContainer container>
        {__SERVER__ && __DEV__ && (
          <Helmet>
            <style type="text/css">{styles._getCss()}</style>
          </Helmet>
        )}
        <MuGrid item>
          <MuGrid item>{navBar !== false && <NavBar />}</MuGrid>
          <Container id="content">{children}</Container>
        </MuGrid>
        <Footer>
          <span>
            &copy; {new Date().getFullYear()}. {settings.app.name}.
          </span>
        </Footer>
      </PageContainer>
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node,
  navBar: PropTypes.bool
};

export default PageLayout;
