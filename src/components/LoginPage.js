import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = props => (
  <div>
    <button onClick={props.startLogin} >Login</button>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
