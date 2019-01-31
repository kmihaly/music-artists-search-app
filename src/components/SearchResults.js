import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchResults extends Component {

    render() {

        const { artists, artistHandler } = this.props;

        return (
            <div>
                <div className='hero is-warning pa10 mat30 rounded-top6'>
                    <h1 className='title'>Search Results:</h1>
                </div>
                <div className='of-scroll results-height field rounded-bottom6'>
                    <ul>
                        {artists.map((artist) => {
                            return (
                                <Link to="/albums" key={artist.artistId}><li
                                    className='button is-fullwidth pa10 bgr-w fs-13r not-rounded'
                                    onClick={() => {
                                        artistHandler(artist.artistId);
                                    }}
                                >
                                {artist.artistName}
                                </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default SearchResults;