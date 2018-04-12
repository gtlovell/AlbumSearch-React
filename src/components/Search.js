import React, { Component } from "react";
import "../styles/search.css";

class Search extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="header">
                    Search for your favorite artist's albums.
                </h1>
                <div className="form-inline">
                    <input
                        type="text"
                        placeholder="Search Artists..."
                        value={this.props.searchTerm}
                        onChange={this.props.handleChange}
                        className=""
                    />
                    <button
                        onClick={this.props.handleClick}
                        className="btn btn-primary"
                    >
                        SEARCH
                    </button>
                </div>
            </div>
        );
    }
}

export default Search;
