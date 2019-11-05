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

  getMyPlaylists() {
    return this.getUserInfo()
      .then(resp => resp.data.id)
      .then(userId => this.getUserPlaylist(userId))
      .then(resp =>
        resp.data.items.map(item => ({
          id: item.id,
          name: item.name,
        })),
      )
      .catch(err => console.log(err));
  }

  getUserPlaylist(userId) {
    return this.axiosInstance({
      url: `/users/${userId}/playlists`,
      method: 'get',
    }).then(resp => {
      console.log(resp);
      return resp;
    });
  }
}

export default Spotify;
