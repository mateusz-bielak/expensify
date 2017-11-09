import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
// import getVisibleExpenses from './selectors/expenses';
import { setTextFilter } from './actions/filters';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 17, createdAt: 337780 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 700 }));
store.dispatch(setTextFilter('gas'));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
