import React from 'react';
import axios from 'axios';

const baseUrl = 'https://api.spotify.com/v1';

const home = props => {
  const {token} = props;

  const changeSongToDisco = async () => {
    if (token !== null) {
      const headers = {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      };
      const devices = await axios({
        url: baseUrl + '/me/player/devices',
        method: 'get',
        headers: headers,
      });
      const deviceId = devices.data.devices[0].id;
      axios({
        url: `${baseUrl}/me/player/play?device_id=${deviceId}`,
        method: 'put',
        headers: headers,
        data: JSON.stringify({uris: ['spotify:track:6q5FIPaFNs5XLvKLKfSdnT']}),
      });
    }
  };
  return (
    <div>
      <button onClick={changeSongToDisco}> Change song </button>
    </div>
  );
};

export default home;
