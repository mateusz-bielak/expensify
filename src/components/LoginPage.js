import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = props => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">Expensify</h1>
      <p>It&apos;s time to get your expenses under control.</p>
      <button className="button" onClick={props.startLogin}>Login with Google</button>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin()),
});

LoginPage.propTypes = {
  startLogin: PropTypes.func.isRequired,
};

export default connect(undefined, mapDispatchToProps)(LoginPage);
