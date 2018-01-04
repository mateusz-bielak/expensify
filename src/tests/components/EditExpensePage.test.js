import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let startEditExpense;
let startRemoveExpense;
let history;
let wrapper;
beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpensePage
    startEditExpense={startEditExpense}
    startRemoveExpense={startRemoveExpense}
    expense={expenses[2]}
    history={history}
  />);
});

test('should render EditExpensePage correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense func', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
  expect(startEditExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith('/');
});

test('should handle removeExpense func', () => {
  wrapper.find('button').simulate('click');
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
  expect(history.push).toHaveBeenLastCalledWith('/');
});
