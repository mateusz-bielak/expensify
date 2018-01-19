import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';


export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.loadDashboardPage();
  }
  onRemove = () => {
    this.props.startRemoveExpense({ id: this.props.expense.id });
    this.loadDashboardPage();
  }
  loadDashboardPage = () => this.props.history.push('/');
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button--secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
      </div>
    );
  }
}

EditExpensePage.propTypes = {
  startEditExpense: PropTypes.func.isRequired,
  expense: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  startRemoveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  startRemoveExpense: id => dispatch(startRemoveExpense(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
