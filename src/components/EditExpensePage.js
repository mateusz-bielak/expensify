import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


const EditExpensePage = props => (
  <div>
    <ExpenseForm
      expense={props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id, expense));
        props.history.push('/');
      }}
    />
    <button onClick={() => {
      props.dispatch(removeExpense({ id: props.expense.id }));
      props.history.push('/');
    }}
    >Remove
    </button>
  </div>
);

EditExpensePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

export default connect(mapStateToProps)(EditExpensePage);
