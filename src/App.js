import React, {useContext} from 'react';
import './App.css';

import {Route, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import AuthContext from './context/AuthContext';
import Navigation from './UI/Navigation';
import Login from './components/Login';
import User from './components/User/User';
import Playlists from './components/Playlists';
import Home from './components/Home';

function App() {
  const {isAuthenticated} = useContext(AuthContext);

  return (
    <div className="App">
      {isAuthenticated() ? <Navigation /> : null}
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/playlists" component={Playlists} />
        <PrivateRoute path="/me" component={User} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
