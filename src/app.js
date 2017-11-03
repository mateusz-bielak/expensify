import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter.js';

ReactDOM.render(<AppRouter />, document.querySelector("#app"));