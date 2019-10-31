import React from 'react';
import {Link} from 'react-router-dom';

import './Navigation.scss';

const Navigation = props => {
  return (
    <nav className="Navigation">
      <ul className="NavItems">
        <li className="NavItem">
          <Link to="/">Home</Link>
        </li>
        <li className="NavItem">
          <Link to="/playlists">Playlists</Link>
        </li>
        <li className="NavItem">
          <Link to="/favourites">Favourites</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation
