import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLoginDispatch }) => (
  <div>
    <button onClick={startLoginDispatch} >Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLoginDispatch: () => dispatch(startLogin()),
});

LoginPage.propTypes = {
  startLoginDispatch: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
