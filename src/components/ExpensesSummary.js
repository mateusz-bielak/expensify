import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';
import numeral from 'numeral';
import getExpensesTotal from '../selectors/expenses-total';
import getVisibleExpenses from '../selectors/expenses';

export const ExpensesSummary = props => (
  <p>
    {props.expenses.length === 1 ?
  `Viewing ${props.expenses.length} expense totaling ${
    numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}` :
  `Viewing ${props.expenses.length} expenses totaling ${
    numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00')}`}
  </p>
);

ExpensesSummary.propTypes = {
  expenses: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = state => ({
  expenses: getVisibleExpenses(state.expenses, state.filters),
});

export default connect(mapStateToProps)(ExpensesSummary);
