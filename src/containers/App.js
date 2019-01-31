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

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleSearchArtistClick();
    }
  }

  handleSearchBoxChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  async saveArtist(artistId) {
    await this.setState({
    chosenArtist: artistId,
    });
    if (artistId) {
      const albums = await this.fetchAlbum();

      await this.setState({ albums: albums });
    }
  }

  async fetchArtists() {
    const search = encodeURIComponent(this.state.searchField);
    const apiURL = 'https://itunes.apple.com/search?media=music&entity=musicArtist&limit=200&term=';
    const query = apiURL + search;
    const response = await fetch(query);
    const json = await response.json();
    return json.results;
  }

  async handleSearchArtistClick() {
    const artists = await this.fetchArtists();
    this.setState({
      artists: artists,
      searchClicked: true,
    });
  }

  async fetchAlbum() {
    const artistId = this.state.chosenArtist;
    const codedId = encodeURI(artistId);
    const apiURL = `https://itunes.apple.com/lookup?id=${codedId}&entity=album&limit=200`;
    const response = await fetch(apiURL);
    const json = await response.json();
    return json.results;
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  render() {

    const { searchClicked, chosenArtist, artists, albums } = this.state;

    return (
      <div>
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
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
                searchChange={this.handleSearchBoxChange}
                searchClick={this.handleSearchArtistClick.bind(this)}
                isClicked={searchClicked}
                artistHandler={this.saveArtist.bind(this)}
                chosenArtist={chosenArtist}
                artists={artists}
              />
            }
          />
          <Route
            path='/albums'
            render={(props) =>
              <AlbumsSite {...props}
                artistName={this.state.chosenArtist}
                albums={albums}
              />
            }
          />
        </Switch>
      </div>
    );
  }
}

export default App;

