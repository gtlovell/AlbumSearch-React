import React from "react";
import "../styles/resultItem.css";

const ResultItem = props => {
    return (
        // <div className="flex-item">
        <img className="flex-item" src={props.cover} alt="" />
    );
};

export default ResultItem;
