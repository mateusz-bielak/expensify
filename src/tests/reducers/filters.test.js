import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const action = { type: '@@INIT' }; // Initial redux action
  const state = filtersReducer(undefined, action);
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should setup text filter', () => {
  const text = 'expense';
  const action = {
    type: 'SET_TEXT_FILTER',
    text,
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('expense');
});

test('should sort by amount', () => {
  const action = { type: 'SORT_BY_AMOUNT' };
  const state = filtersReducer(undefined, action);
  expect(state.sortBy).toBe('amount');
});

test('should sort by date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set start date for filtering', () => {
  const date = moment(0);
  const action = {
    type: 'SET_START_DATE',
    date,
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(moment(0));
});

test('should set end date for filtering', () => {
  const date = moment(0);
  const action = {
    type: 'SET_END_DATE',
    date,
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(moment(0));
});
