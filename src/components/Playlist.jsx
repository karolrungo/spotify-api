import React from 'react';

import './Playlist.scss'

const Playlist = ({playlist: {name, img, tracks}}) => (
  <div className='Playlist'>
    <h1>{name}</h1>
    <img src={img.url} alt="Logo" width={img.width} height={img.height} />
    { tracks && tracks.map(track => <p>{track.item.track.name}</p>) }
  </div>
);

export default Playlist
