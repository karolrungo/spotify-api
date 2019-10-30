import axios from 'axios';

const baseURL = 'https://api.spotify.com/v1';
const buildHeaders = token => ({
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

class Spotify {
  constructor(token) {
    this.axiosInstance = axios.create({
      baseURL: baseURL,
      headers: buildHeaders(token),
    });
  }

  getUserInfo() {
    return this.axiosInstance({
      url: `/me`,
    });
  }
  getDevices() {
    return this.axiosInstance({
      url: `/me/player/devices`,
      method: 'get',
    });
  }

  changeSongInDevice(deviceId) {
    return this.axiosInstance({
      url: `/me/player/play?device_id=${deviceId}`,
      method: 'put',
      data: JSON.stringify({
        uris: ['spotify:track:6q5FIPaFNs5XLvKLKfSdnT'],
      }),
    });
  }
}

export default Spotify;
