import React, { Component } from "react";
import $ from "jquery";
import "./App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import ArtistInfo from "./components/ArtistInfo";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            searchTerm: "",
            results: [],
            covers: [],
            artists: "",
            genres: ""
        };
    }

    handleClick = () => {
        $.ajax({
            type: "GET",
            dataType: "jsonp",
            url: `https://itunes.apple.com/search?term=${
                this.state.searchTerm
            }&country=us&entity=album&limit=20`,
            success: data => {
                const artistTitle = data.results.map(music => music.artistName);
                const artistGenre = data.results.map(
                    music => music.primaryGenreName
                );
                const albumCovers = data.results.map(
                    music => music.artworkUrl100
                );

                this.setState({
                    results: data,
                    covers: albumCovers,
                    artists: artistTitle[0],
                    genres: artistGenre[0]
                });
                console.log(data);
            }
        });
    };

    handleChange = e => {
        this.setState({
            searchTerm: e.target.value
        });
    };

    render() {
        return (
            <div className="App">
                <Search
                    searchTerm={this.state.searchTerm}
                    handleChange={this.handleChange}
                    handleClick={this.handleClick}
                />
                <ArtistInfo
                    artists={this.state.artists}
                    genres={this.state.genres}
                />
                <Results
                    covers={this.state.covers}
                    albums={this.state.albums}
                />
            </div>
        );
    }
}

export default App;
