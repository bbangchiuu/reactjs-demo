import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Redirect, Route
} from "react-router-dom";
import routes, { RouteWithSubRoutes } from './RouteWithSubRoutes';
import login from './components/Login';
import dashboard from './components/Dashboard';
function App() {
  return (
    <div className="application">
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          {routes.map((route, i) => (
            <RouteWithSubRoutes key={i} {...route} />
          ))}
          {/* basic */}
          {/* <Route exact path='/' component={login}/>
          <Route path='/login' component={login}/>
          <Route path='/dashboard' component={dashboard}/> */}
        </Switch>
      </Router>
    </div>

  );
}

export default App;
