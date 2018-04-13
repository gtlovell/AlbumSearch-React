import React from "react";
import ResultItem from "./ResultItem";

const Results = props => {
    return (
        <div className="container flex-container wrap">
            {props.covers.map(cover => {
                return <img className="flex-item" src={cover} alt="" />;
            })}
        </div>
    );
};

export default Results;
