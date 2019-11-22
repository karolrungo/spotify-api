import React, {useContext, useMemo} from 'react';
import AuthContext from './../context/AuthContext';
import Spotify from './../api/spotify';

const withSpotify = WrappedComponent => {
  const WithSpotifyComponent = (props) => {
    const {token} = useContext(AuthContext);
    const spotify = useMemo(() => new Spotify(token), [token]);

    return  <WrappedComponent {...props} api={spotify} />;
  }

  return WithSpotifyComponent
};

export default withSpotify;
