import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();

// addExpense -> Water bill
store.dispatch(addExpense({ description: 'Water bill' }));
// addExpense -> Gas bill
store.dispatch(addExpense({ description: 'Gas bill' }));
// setTextFilter -> bill (2 items) -> water (1 item)
store.dispatch(setTextFilter('bill'));
// getVisibleExpenses -> print visibles ones to screen
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.querySelector('#app'));
