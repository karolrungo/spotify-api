import React, {useState, useEffect} from 'react';
import './App.css';

import Login from './components/Login';
import Home from './components/Home';

function App() {
  const [token, setToken] = useState(null);

  const retreiveToken = () => {
    const hash = window.location.hash
      .substring(1)
      .split('&')
      .reduce(function(initial, item) {
        if (item) {
          var parts = item.split('=');
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = '';
    if (hash.access_token) {
      setToken(hash.access_token);
    }
  };

  useEffect(() => {
    retreiveToken();
  });

  return (
    <div className="App">
      <Login />
      <Home token={token}/>
    </div>
  );
}

export default App;
