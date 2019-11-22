import React from 'react';

import withSpotify from './../hoc/withSpotify'

const Home = props => {
  const {api} = props

  const changeSongToDisco = async () => {
    try {
      const devices = await api.getDevices();
      const deviceId = devices.devices[0].id;
      console.log(deviceId);
      await api.changeSongInDevice(deviceId);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <button onClick={changeSongToDisco}> Change song </button>
    </div>
  );
};

export default withSpotify(Home);
