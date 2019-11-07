import React, {useEffect, useContext} from 'react';
import logo from './../logo.svg';
import AuthContext from './../context/AuthContext'

const CLIENT_ID = 'c2c889279e7140c683ec1c7cdd8bb977';
const TARGET = 'https://accounts.spotify.com';
const ENDPOINT = '/authorize';
const REDIRECT_URI = process.env.NODE_ENV === 'production' ? 'https://rungokarol.github.io/spotify-api/' : 'http://localhost:3000/'
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

const Login = props => {
  const authContext = useContext(AuthContext);
  // console.log(authContext)

  useEffect(() => {
    console.log(window.history.state)
    if(window.history.state === null) {
      console.log(`null history state`)
      return
    }
    let hash = window.history.state.state.from.hash
    if (!hash) {
      console.log(`nullable hash`)
      return
    }
    console.log(hash)
    const { access_token } = hash
      .substring(1)
      .split('&')
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    console.log(JSON.stringify(access_token))
    if (access_token) {
      console.log(`update token: ${access_token}`)
      authContext.onTokenChange(access_token);
      props.history.push('/home')
    }
  }, [authContext, props.history]);

  return (
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
};

export default Login;
