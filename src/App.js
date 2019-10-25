import React from 'react';
import './App.css';

import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import Login from './components/Login';
import Home from './components/Home';

function App() {

  return (
        <div className="App">
          <BrowserRouter>
            <Switch>
              <Route path="/login" component={Login} />
              <PrivateRoute
                exact
                path="/"
                component={() => <Home token={null} />}
              />
              <Route render={() => <Redirect to="/" />} />
            </Switch>
          </BrowserRouter>
        </div>
  );
}

export default App;
