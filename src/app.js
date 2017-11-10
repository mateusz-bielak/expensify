import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
// import getVisibleExpenses from './selectors/expenses';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: 7890 }));
store.dispatch(addExpense({ description: 'Gas bill', amount: 3700, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: 4200 }));

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
