import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
  dispatch,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}
    >Remove
    </button>
  </div>
);

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ExpenseListItem);
