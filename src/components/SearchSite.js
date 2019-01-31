import React, { Component } from 'react';
import SearchBox from './SearchBox';
import './SearchSite.css';
import SearchResults from './SearchResults';

class SearchSite extends Component {

    render() {

        const { artists, searchChange, searchClick, artistHandler, isClicked } = this.props;

        return (
            <section className='hero'>
                <div className='hero-body ford-background rounded15'>
                    <div className='container jc-center'>
                        <div className='hero is-warning rounded-top-6 pa10 d-block'>
                            <h1 className='title'>Search for Your Favorite Artists</h1>
                        </div>
                        <SearchBox searchChange={searchChange} />
                        <a
                            className='button is-warning'
                            target=""
                            href="#"
                            onClick={searchClick}>SEARCH
                        </a>
                        {                            
                            artists.length > 0
                            ?
                            <SearchResults artists={artists} artistHandler={artistHandler} />
                            : 
                            isClicked && artists.length === 0
                                ?
                                <div>
                                    <div className='hero is-warning rounded6 pa10 mat30 d-block'>
                                        <h1 className='title '>Search Results: 0</h1>
                                    </div>
                                </div>
                                :
                                null
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default SearchSite;

