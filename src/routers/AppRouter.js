import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePageConnected from '../components/AddExpensePage';
import EditExpensePageConnected from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPageConnected from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={LoginPageConnected}
          exact
        />
        <Route
          path="/dashboard"
          component={ExpenseDashboardPage}
          exact
        />
        <Route
          path="/expensify"
          component={ExpenseDashboardPage}
          exact
        />
        <Route
          path="/create"
          component={AddExpensePageConnected}
        />
        <Route
          path="/edit/:id"
          component={EditExpensePageConnected}
        />
        <Route
          path="/help"
          component={HelpPage}
        />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
