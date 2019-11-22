import React, { useEffect, useState } from 'react';
import Playlist from './Playlist';
import withSpotify from './../hoc/withSpotify'

import './Playlists.scss';

const Playlists = props => {
  const {api} = props
  const [playlists, setPlaylists] = useState([]);

  const addPlaylists = newPlaylists => {
    setPlaylists([...newPlaylists]);
  };

  useEffect(() => {
    (async () => {
      addPlaylists(await api.getMyPlaylists());
    })();
  }, [api]);

  return (
    <div className="Playlists">
      <h2>Playlists!</h2>
      {playlists.map(playlist => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default withSpotify(Playlists);
