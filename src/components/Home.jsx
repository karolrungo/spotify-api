import React, {useContext} from 'react';
import axios from 'axios';
import AuthContext from './../context/AuthContext';

const Home = props => {
  const {token} = useContext(AuthContext);

  const headers = {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };

  const baseURL = 'https://api.spotify.com/v1';
  const axiosInstance = axios.create({
    baseURL: baseURL,
    headers: headers,
  });

  const getUserInfo = () =>
    axiosInstance({
      url: `/me`,
    });

  const getDevices = () =>
    axiosInstance({
      url: `/me/player/devices`,
      method: 'get',
    });

  const changeSongInDevice = deviceId =>
    axiosInstance({
      url: `/me/player/play?device_id=${deviceId}`,
      method: 'put',
      data: JSON.stringify({
        uris: ['spotify:track:6q5FIPaFNs5XLvKLKfSdnT'],
      }),
    });

  const changeSongToDisco = async () => {
    if (token !== null) {
      try {
        const user = getUserInfo()
        console.log(user)

        const devices = await getDevices();
        const deviceId = devices.data.devices[0].id;
        console.log(deviceId);
        changeSongInDevice(deviceId);
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
