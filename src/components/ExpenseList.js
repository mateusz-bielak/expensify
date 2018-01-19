import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import getVisibleExpenses from '../selectors/expenses';

// Exporting for testing purposes
export const ExpenseList = props => (
  <div className="content-container">
    <div className="list-header">
      <div className="show-for-mobile">Expenses</div>
      <div className="show-for-desktop">Expense</div>
      <div className="show-for-desktop">Amount</div>
    </div>
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
