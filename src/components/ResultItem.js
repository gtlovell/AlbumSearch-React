import React from "react";
import "../styles/resultItem.css";

const ResultItem = props => {
    return (
        <li className="list-group-item list-style">
            <img src={props.cover} alt="" />
            <h5 className="result">{props.album}</h5>
            {/* <hr /> */}
        </li>
    );
};

export default ResultItem;
