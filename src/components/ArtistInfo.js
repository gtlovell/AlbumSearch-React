import React from 'react';
import '../styles/artistInfo.css';

const ArtistInfo = () => {
  return (
    <div className="container">
      <div className="artist-info">
        <h2 className="artist-name">{this.props.artists}</h2>
        <h5 className="genre">{this.props.genres}</h5>
      </div>
      <hr />
    </div>
  );
};

export default ArtistInfo;
