import React, {useContext} from 'react';
import AuthContext from './../context/AuthContext';
import Spotify from './../api/spotify';

const Home = props => {
  const {token} = useContext(AuthContext);
  const spotify = new Spotify(token);

  const changeSongToDisco = async () => {
    try {
      const devices = await spotify.getDevices();
      const deviceId = devices.devices[0].id;
      console.log(deviceId);
      spotify.changeSongInDevice(deviceId);
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

export default Home;
