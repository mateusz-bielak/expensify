import moment from 'moment';
import filtersReducer from '../../reducers/filters';

const defaultState = filtersReducer(undefined, { type: '@@INIT' }); // Initial redux action

test('should setup default filter values', () => {
  const state = defaultState;
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  });
});

test('should setup text filter', () => {
  const action = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'expense' });
  expect(action).toEqual({
    ...defaultState,
    text: 'expense',
  });
});

test('should sort by amount', () => {
  const action = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT', sortBy: 'amount' });
  expect(action).toEqual({
    ...defaultState,
    sortBy: 'amount',
  });
});

test('should sort by date', () => {
  const state = {
    ...defaultState,
    sortBy: '',
  };
  const action = filtersReducer(state, { type: 'SORT_BY_DATE', sortBy: 'date' });
  expect(action).toEqual({
    ...defaultState,
    sortBy: 'date',
  });
});

test('should set start date for filtering', () => {
  const action = filtersReducer(defaultState, { type: 'SET_START_DATE', date: moment(0) });
  expect(action).toEqual({
    ...defaultState,
    startDate: moment(0),
  });
});

test('should set end date for filtering', () => {
  const action = filtersReducer(defaultState, { type: 'SET_END_DATE', date: moment(0) });
  expect(action).toEqual({
    ...defaultState,
    endDate: moment(0),
  });
});
