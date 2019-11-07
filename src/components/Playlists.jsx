import React, {useContext, useEffect, useState, useMemo} from 'react';
import AuthContext from './../context/AuthContext';
import Playlist from './Playlist';

import Spotify from './../api/spotify';

import './Playlists.scss';

const Playlists = props => {
  const {token} = useContext(AuthContext);
  const spotify = useMemo(() => new Spotify(token), [token]);

  const [playlists, setPlaylists] = useState([]);

  const addPlaylists = newPlaylists => {
    setPlaylists([...newPlaylists]);
  };

  useEffect(() => {
    (async () => {
      addPlaylists(await spotify.getMyPlaylists());
    })();
  }, [spotify]);

  return (
    <div className="Playlists">
      <h2>Playlists!</h2>
      {playlists.map(playlist => (
        <Playlist key={playlist.id} playlist={playlist} />
      ))}
    </div>
  );
};

export default Playlists;
