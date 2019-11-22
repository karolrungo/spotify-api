import React, {useContext, useMemo} from 'react';
import AuthContext from './../context/AuthContext';
import Spotify from './../api/spotify';

const WithSpotify = WrappedComponent => {
  const {token} = useContext(AuthContext);
  const spotify = useMemo(() => new Spotify(token), [token]);

  return props => <WrappedComponent {...props} api={spotify} />;
};

export default WithSpotify;
