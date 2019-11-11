import React, {useContext, useEffect, useState, useMemo} from 'react';
import AuthContext from './../../context/AuthContext';
import Spotify from './../../api/spotify';

import './User.scss';

const User = props => {
  const [user, setUser] = useState(null);
  const {token} = useContext(AuthContext);
  const spotify = useMemo(() => new Spotify(token), [token]);

  const updateUser = user => {
    setUser(user);
  };

  useEffect(() => {
    (async () => {
      const fetched = await spotify.getUserInfo();
      console.log(fetched);
      updateUser(fetched);
    })();
  }, [spotify]);

  return (
    <React.Fragment>
      <p>user page</p>
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
