import React from "react";
import ResultItem from "./ResultItem";

const Results = props => {
    return (
        <ul className="list-group">
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        {props.covers.map(cover => {
                            return <ResultItem key={cover} cover={cover} />;
                        })}
                    </div>
                    <div className="col-md-6">
                        {props.albums.map(album => {
                            return (
                                <div className="album-title">
                                    <ResultItem key={album} album={album} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </ul>
    );
};

export default Results;
