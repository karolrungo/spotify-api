import React from 'react';
import './App.css';

import {BrowserRouter as Router, Route, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import Login from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute exact path="/" component={Home} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
