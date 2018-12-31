import React, { Component } from 'react';
import SearchBox from './SearchBox';
import './SearchSite.css';
import SearchResults from './SearchResults';

class SearchSite extends Component {

    render() {

        const { artists, searchChange, searchClick, artistHandler, isClicked, chosenArtist } = this.props;

        return (
            <section className='ford-background rounded15 hero'>
                <div className='hero-body'>
                    <div className='container'>
                        <div className='hero is-warning rounded6 pa10'>
                            <h1 className='title'>Search for Your Favorite Artists</h1>
                        </div>
                        <SearchBox searchChange={searchChange}></SearchBox>
                        <a
                            className='button is-warning'
                            target=""
                            href="#"
                            onClick={searchClick}>SEARCH
                        </a>
                        {                            
                            artists.length > 0
                            ?
                                <SearchResults artists={artists} artistHandler={artistHandler} chosenArtist={chosenArtist}/>
                            : 
                            isClicked && artists.length === 0
                            ?
                            <div>
                                <div className='hero is-warning rounded6 pa10 mat30'>
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

