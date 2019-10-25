import React, {useContext} from 'react';
import axios from 'axios';
import AuthContext from './../context/AuthContext';

const baseUrl = 'https://api.spotify.com/v1';

const Home = props => {
  const {token} = useContext(AuthContext);

  const changeSongToDisco = async () => {
    if (token !== null) {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      try {
        const devices = await axios({
          url: baseUrl + '/me/player/devices',
          method: 'get',
          headers: headers,
        });
        const deviceId = devices.data.devices[0].id;
        console.log(deviceId)
        axios({
          url: `${baseUrl}/me/player/play?device_id=${deviceId}`,
          method: 'put',
          headers: headers,
          data: JSON.stringify({
            uris: ['spotify:track:6q5FIPaFNs5XLvKLKfSdnT'],
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <button onClick={changeSongToDisco}> Change song </button>
    </div>
  );
};

export default Home;
