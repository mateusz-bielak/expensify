import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePageConnected from '../components/AddExpensePage';
import EditExpensePageConnected from '../components/EditExpensePage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import LoginPage from '../components/LoginPage';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={LoginPage}
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
  </BrowserRouter>
);

export default AppRouter;
