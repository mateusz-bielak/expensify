import 'react-dates/initialize';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import 'react-dates/lib/css/_datepicker.css';

import AppRouter, { history } from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.querySelector('#app'));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.querySelector('#app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    renderApp();
    history.push('/');
  }
});
