import React from "react";
import "../styles/results.css";

const Results = props => {
    return (
        <div>
            <ul className="flex-container wrap">
                {props.albums.map(album => (
                    <li>
                        <div className="card">
                            <img
                                className="flex-item album-cover"
                                src={album.artworkUrl100}
                                alt={album.collectionId}
                            />
                            <h5 className="album-title">
                                {album.collectionName}
                            </h5>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Results;
