import React, { Component } from "react";
import "./styles/App.css";
import Search from "./components/Search";
import Results from "./components/Results";
import ArtistInfo from "./components/ArtistInfo";
import axios from "axios";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);

        this.state = {
            searchTerm: "",
            albums: [],
            artists: "",
            genres: ""
        };
    }

    handleClick = () => {
        axios
            .get(
                `https://itunes.apple.com/search?term=${
                    this.state.searchTerm
                }&country=us&entity=album&limit=20`
            )
            .then(res => {
                const albums = res.data.results;
                const artistname = res.data.results.map(
                    artist => artist.artistName
                );
                const genrename = res.data.results.map(
                    artist => artist.primaryGenreName
                );

                this.setState({
                    albums,
                    artists: artistname[0],
                    genres: genrename[0]
                });
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
                    handleClick={this.handleClick}
                    handleChange={this.handleChange}
                />
                <ArtistInfo
                    artists={this.state.artists}
                    genres={this.state.genres}
                />
                <Results albums={this.state.albums} />
            </div>
        );
    }
}

export default App;
