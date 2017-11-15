import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

// Exporting for testing purposes
export const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>
    {props.expenses.length !== 0 ? (
      props.expenses.map(expense => <ExpenseListItem key={expense.id} {...expense} />)
    ) : (
      <p>Add some expenses</p>
    )}
  </div>
);


ExpenseList.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpenseList);
