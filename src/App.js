import React, {useContext} from 'react';
import './App.css';

import {Route, Redirect, Switch} from 'react-router-dom';
import PrivateRoute from './hoc/PrivateRoute';
import AuthContext from './context/AuthContext'
import Navigation from './UI/Navigation';
import Login from './components/Login';
import User from './components/User/User';
import Playlists from './components/Playlists';
import Home from './components/Home';


import withSpotify from './hoc/withSpotify'

function App() {
  const HomeWithSpotify = withSpotify(Home)
  const PlaylistsWithSpotify = withSpotify(Playlists)
  const UserWithSpotify = withSpotify(User)
  const {isAuthenticated} = useContext(AuthContext)
  return (
    <div className="App">
      { isAuthenticated()? <Navigation /> : null}
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/" component={HomeWithSpotify} />
        <PrivateRoute path="/playlists" component={PlaylistsWithSpotify} />
        <PrivateRoute path="/me" component={UserWithSpotify} />
        <Route render={() => <Redirect to="/" />} />
      </Switch>
    </div>
  );
}

export default App;
