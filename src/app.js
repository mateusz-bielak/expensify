import 'react-dates/initialize';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import configureStore from './store/configureStore';
import 'react-dates/lib/css/_datepicker.css';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.querySelector('#app'));
