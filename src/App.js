import React from 'react';
import './App.css';

import {Route, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import Navigation from './UI/Navigation';
import Login from './components/Login';
import Playlists from './components/Playlists';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/playlists" component={Playlists} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
