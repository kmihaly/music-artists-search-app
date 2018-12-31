import React, { Component } from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import AlbumsSite from '../components/AlbumsSite';
import SearchSite from '../components/SearchSite';

class App extends Component {

  constructor() {
    super();
    this.state = {
      artists: [],
      searchField: '',
      searchClicked: false,
      chosenArtist: '',
      albums: [],
    }
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  async handleArtist(artistName) {
    await this.setState({
      chosenArtist: artistName,
    });
    if (artistName) {
      const albums = await this.fetchAlbum();
      await this.setState({ albums: albums });
    }
  }

  async fetchArtists() {
    const search = this.state.searchField.split(' ').join('+');
    const apiURL = 'https://itunes.apple.com/search?media=music&entity=musicArtist&term=';
    const query = apiURL + search;
    const response = await fetch(query);
    const json = await response.json();
    return json.results;
  }

  async handleClick() {
    const artists = await this.fetchArtists();
    this.setState({
      artists: artists,
      searchClicked: true,
    });
  }

  async fetchAlbum() {
    const artistName = this.state.chosenArtist;
    const nameText = artistName.split(' ').join('+');
    const apiURL = `https://itunes.apple.com/search?term=${nameText}&entity=album`;
    const response = await fetch(apiURL);
    const json = await response.json();
    return json.results;
  }

  render() {

    const { searchClicked, chosenArtist, artists, albums } = this.state;

    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand jc-center">
            <ul>
              <li className='button is-warning mar10'>
                <NavLink className='navbar-item' to="/">Artists</NavLink>
              </li>
              <li className='button is-warning mar10'>
                <NavLink className='navbar-item' to="/albums">Albums</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route
            exact path='/'
            render={(props) =>
              <SearchSite {...props}
                searchChange={this.handleChange}
                searchClick={this.handleClick.bind(this)}
                isClicked={searchClicked}
                artistHandler={this.handleArtist.bind(this)}
                chosenArtist={chosenArtist}
                artists={artists}
              >
              </SearchSite>}
          />
          <Route
            path='/albums'
            render={(props) =>
              <AlbumsSite {...props}
                artistName={this.state.chosenArtist}
                albums={albums}
              >
              </AlbumsSite>
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

