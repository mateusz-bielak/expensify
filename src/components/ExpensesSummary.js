import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = (props) => {
  const expenseWord = props.expenses.length === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
  return (
    <div>
      <h1>
        Viewing {props.expenses.length} {expenseWord} totaling {formattedExpensesTotal}
      </h1>
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
