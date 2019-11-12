import React, {useContext, useEffect, useState, useMemo} from 'react';
import AuthContext from './../../context/AuthContext';
import Spotify from './../../api/spotify';

import './User.scss';

const User = props => {
  const [user, setUser] = useState(null);
  const {token} = useContext(AuthContext);
  const spotify = useMemo(() => new Spotify(token), [token]);

  const getUserInfo = async () => {
    console.log("button clicked")
    const fetched = await spotify.getUserInfo();
    console.log(fetched)
    setUser(fetched);
  }

  return (
    <React.Fragment>
      <p>user page</p>
      <button onClick={getUserInfo} > click me </button>
      {user && (
        <div>
          <p>{user.display_name}</p>
          <p>{user.email}</p>
        </div>
      )}
    </React.Fragment>
  );
};

export default User;
