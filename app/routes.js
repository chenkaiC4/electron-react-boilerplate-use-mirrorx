/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route, Router } from 'mirrorx';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';

export default () => (
  <App>
    <Router>
      <Switch>
        <Route path="/counter" component={CounterPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </Router>
  </App>
);
