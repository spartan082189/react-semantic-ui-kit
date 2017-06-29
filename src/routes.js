import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Welcome from './views/Welcome/WelcomeView';
import NotFound from './views/NotFoundView/NotFoundView';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Welcome}/>
    <Route path="welcome" component={Welcome}/>
    <Route path="*" component={NotFound}/>
  </Route>
);
