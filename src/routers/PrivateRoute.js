import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import HeaderConnected from '../components/Header';

export const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  <div>
    <HeaderConnected />
    <Route
      {...rest}
      component={props => (
      isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
    )}
    />
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
