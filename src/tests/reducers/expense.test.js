import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should setup default state', () => {
  const action = { type: '@@INIT' }; // Initial redux action
  const state = expensesReducer(undefined, action);
  expect(state).toEqual([]);
});

test('should add expense', () => {
  const expense = {
    description: 'Dinner',
    note: '',
    amount: 3000,
    createdAt: moment(0),
  };
  const action = { type: 'ADD_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should remove expense', () => {
  const action = { type: 'REMOVE_EXPENSE', id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense when no id match', () => {
  const action = { type: 'REMOVE_EXPENSE', id: -1 };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should edit expense', () => {
  const updates = {
    description: 'plane',
  };
  const action = { type: 'EDIT_EXPENSE', id: expenses[1].id, updates };
  const state = expensesReducer(expenses, action);
  expect(state[1].description).toBe(updates.description);
});

test('should not edit expense when no id match', () => {
  const updates = {
    description: 'plane',
  };
  const action = { type: 'EDIT_EXPENSE', id: -1, updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
