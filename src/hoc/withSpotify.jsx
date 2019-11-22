import React, {useContext, useMemo} from 'react';
import AuthContext from './../context/AuthContext';
import Spotify from './../api/spotify';

const WithSpotify = WrappedComponent => {
  const {token} = useContext(AuthContext);
  const spotify = useMemo(() => new Spotify(token), [token]);

  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} api={spotify}/>
    }
  }
};

export default WithSpotify;
