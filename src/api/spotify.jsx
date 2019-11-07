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

  async getUserInfo() {
    const userInfo = await this.axiosInstance({
      url: `/me`,
    });
    return userInfo.data
  }
  async getDevices() {
    const devices = await this.axiosInstance({
      url: `/me/player/devices`,
      method: 'get',
    });
    return devices.data
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

  async getMyPlaylists() {
    const userInfo = await this.getUserInfo();
    const playlists = await this.getPlaylists(userInfo.id);

    return await Promise.all(playlists.items.map(async item => {
      const tracks = await this.getTracks(item.id)
      return {
        id: item.id,
        name: item.name,
        img: item.images[2],
        tracks: tracks.items.map(({track}) => track.name),
      }
    }));
  }

  async getPlaylists(userId) {
    const playlists = await this.axiosInstance({
      url: `/users/${userId}/playlists`,
      method: 'get',
    });
    return playlists.data;
  }

  async getTracks(playlistId) {
    const tracks = await this.axiosInstance({
      url: `/playlists/${playlistId}/tracks`,
      method: 'get',
    });
    return tracks.data;
  }
}

export default Spotify;
