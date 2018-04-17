import React, { Component } from "react";
import "../styles/search.css";

class Search extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="header">
                    Search for your favorite artist's albums.
                </h1>
                <div className="container formy">
                    <div className="row form-inline">
                        <input
                            type="text"
                            placeholder="Search Artists..."
                            value={this.props.searchTerm}
                            onChange={this.props.handleChange}
                            className="col-xl-4col-lg-4 col-md-4 col-sm"
                        />

                        <button
                            onClick={this.props.handleClick}
                            className="btn btn-primary col-xl-2 col-lg-2 col-md-2 col-sm"
                        >
                            SEARCH
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;
