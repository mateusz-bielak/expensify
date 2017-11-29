import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses', () => {
  const res = getExpensesTotal([]);
  expect(res).toBe(0);
});

test('Should correctly add up single expense', () => {
  const res = getExpensesTotal([expenses[1]]);
  expect(res).toBe(50000);
});

test('Should correctly add up multiple expenses', () => {
  const res = getExpensesTotal(expenses);
  expect(res).toBe(352500);
});
