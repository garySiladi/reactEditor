import React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import MainViewContainer from './containers/MainViewContainer';

export default () => (
  <App>
    <Switch>
      <Route path="/" component={MainViewContainer} />
    </Switch>
  </App>
);
