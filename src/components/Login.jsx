import React from 'react';
import logo from './../logo.svg';

const CLIENT_ID = 'c2c889279e7140c683ec1c7cdd8bb977';
const TARGET = 'https://accounts.spotify.com';
const ENDPOINT = '/authorize';
const REDIRECT_URI = 'http://localhost:3000/';
const SCOPES = [
  'user-top-read',
  'user-read-currently-playing',
  'user-read-playback-state',
  'user-modify-playback-state',
];

const url = `${TARGET}${ENDPOINT}?
client_id=${CLIENT_ID}&
redirect_uri=${REDIRECT_URI}&
scope=${SCOPES.join('%20')}&response_type=token&show_dialog=true`;

const login = props => (
  <header className="App-header">
    <img src={logo} className="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a className="App-link" href={url} rel="noopener noreferrer">
      Connect with Spotify
    </a>
  </header>
);

export default login;
