import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import querystring from 'querystring'

function App() {

    const [token, setToken] = useState(null)

    const CLIENT_ID = 'c2c889279e7140c683ec1c7cdd8bb977'
    const TARGET = 'https://accounts.spotify.com'
    const ENDPOINT = '/authorize'
    const REDIRECT_URI = 'http://localhost:3000/'
    const SCOPES = [
      "user-top-read",
      "user-read-currently-playing",
      "user-read-playback-state",
      "user-modify-playback-state"
    ];
  useEffect(() => {

    console.log('hello')
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = "";
    if(hash.access_token) {

      setToken(hash.access_token)
    }
  }, [setToken])

  useEffect(() => {

    const headers = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "Accept": "application/json"
    }

    if(token !== null) {
      axios({
        // url: 'https://api.spotify.com/v1/search?query=Muse&type=artist',
        url: 'https://api.spotify.com/v1/me/player/devices',
        method: 'get',
        headers: headers,
        })

        .then(response => {
          // const fetched = response.data.artists.items.filter(item => item.name === "Muse")
          console.log(response)
        })
    }
  },[token])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href={`${TARGET}${ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES.join(
            "%20"
          )}&response_type=token&show_dialog=true`}
          rel="noopener noreferrer"
        >
          Connect with Spotify
        </a>
      </header>
    </div>
  );
}

export default App;
