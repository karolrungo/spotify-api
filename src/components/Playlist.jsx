import React, {useState} from 'react';

import './Playlist.scss';

const Playlist = ({playlist: {name, img, tracks}}) => {
  const [showTracks, setShowTracks] = useState(false)

  const toggleShowTracks = () => {
    setShowTracks(prev => !prev)
  }

  const tracksContainer = showTracks ? (
  <div className="Playlist--tracks">
    {tracks && tracks.map(track => <p>{track}</p>)}
  </div>
  ) : null

  return (<div className="Playlist">
  <h1>{name}</h1>
  <img src={img.url} alt="Logo" width={img.width} height={img.height} onClick={toggleShowTracks}/>
  {tracksContainer}
</div>)
};

export default Playlist;
