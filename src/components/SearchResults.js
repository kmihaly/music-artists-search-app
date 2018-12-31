import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class SearchResults extends Component {

    render() {

        const { artists, artistHandler, chosenArtist } = this.props;

        return (
            <div>
                <div className='hero is-warning rounded6 pa10 mat30'>
                    <h1 className='title'>Search Results:</h1>
                </div>
                <div className=' of-scroll results-height'>
                    <ul>
                        {artists.map((artist) => {
                            return (
                                <li
                                    key={artist.artistId}
                                    className='button is-fullwidth pa10 bgr-w fs-13r'
                                    onClick={() => {
                                        artistHandler(artist.artistName);
                                    }}
                                >{artist.artistName}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <NavLink className='button is-warning mar10' to="/albums">{`Show ${chosenArtist} albums`}</NavLink>
            </div>
        );
    }
}

export default SearchResults;