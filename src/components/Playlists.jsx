import React, {useContext, useEffect, useState, useMemo} from 'react';
import AuthContext from './../context/AuthContext';

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
    const fetchPlaylists = async () => {
      const playlists = await spotify.getMyPlaylists();
      addPlaylists(playlists)
    };

    fetchPlaylists();
  }, [spotify]);

  return (
    <div className="Playlists">
      <h2>Playlists!</h2>
      {playlists.map(playlist => (
        <div key={playlist.id}>{playlist.name}</div>
      )
      )}
    </div>
  );
};

export default Playlists;
