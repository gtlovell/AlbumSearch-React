import React from "react";
import "../styles/artistInfo.css";

const ArtistInfo = props => {
    return (
        <div className="container">
            <div className="artist-info">
                <h2 className="artist-name">{props.artists}</h2>
                <h5 className="genre">{props.genres}</h5>
            </div>
            <hr />
        </div>
    );
};

export default ArtistInfo;
