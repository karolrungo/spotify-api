import React, {
  useEffect,
  useState,
  useCallback,
} from 'react';
import withSpotify from './../../hoc/withSpotify'

import './User.scss';

const User = props => {
  const [user, setUser] = useState(null);
  const {api} = props

  const fetchUserData = useCallback(async () => {
    setUser(await api.getUserInfo());
  }, [api]);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

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

const UserWithSpotify = withSpotify(User)

export default UserWithSpotify
