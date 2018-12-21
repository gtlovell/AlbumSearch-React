import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import '../src/styles/App.css';
import Search from './components/Search';
import Results from './components/Results';
import ArtistInfo from './components/ArtistInfo';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
      albums: [],
      artists: '',
      genres: ''
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
        const artistname = albums.map(artist => artist.artistName);
        const genrename = albums.map(artist => artist.primaryGenreName);

        this.setState({
          albums,
          artists: artistname[0],
          genres: genrename[0]
        });
      });
  };
  handleChange = e => {
    e.preventDefault();
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
        <ArtistInfo artists={this.state.artists} genres={this.state.genres} />
        <Results albums={this.state.albums} />
      </div>
    );
  }
}

export default hot(module)(App);
