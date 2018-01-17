import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">Viewing <span>{props.expenses.length}</span> {expenseWord} totaling <span>{formattedExpensesTotal}</span></h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">Add Expense</Link>
        </div>
      </div>
    </div>
  );
};

ExpensesSummary.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesSummary);
