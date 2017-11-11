import moment from 'moment';
import getVisibleExpenses from '../../selectors/expenses';

const expenses = [{
  id: '1',
  description: 'Car',
  note: '',
  amount: 300000,
  createdAt: moment(0),
}, {
  id: '2',
  description: 'Vacation',
  note: '',
  amount: 50000,
  createdAt: moment(0).add(4, 'days'),
}, {
  id: '3',
  description: 'Dog',
  note: '',
  amount: 2500,
  createdAt: moment(0).subtract(4, 'days'),
}];

test('should filter by text value', () => {
  const filters = {
    text: 'a',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0),
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[2]]);
});

test('should filter by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[1], expenses[0], expenses[2]]);
});

test('should filter by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  };
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[0], expenses[1], expenses[2]]);
});
