import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import routes from './routes';

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work
const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class MainContentContainer extends Component {
  render() {
    return (
      <div className="app-content-container">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    )
  }
}

export default MainContentContainer;
