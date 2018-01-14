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
  <Route
    {...rest}
    component={props => (
      isAuthenticated ?
        <div>
          <HeaderConnected />
          <Component {...props} />
        </div>
        : <Redirect to="/" />
    )}
  />
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(PrivateRoute);
