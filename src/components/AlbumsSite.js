import React, { Component } from 'react';

class AlbumsSite extends Component {

    render() {

        const {albums} = this.props;

        return (
            <div>
                {
                    albums.length !== 0
                        ?
                        <section className='hero rounded15 of-scroll has-background-danger max-height600 pa10'>
                            <ul>
                                {albums.map(
                                    album => {
                                        return (
                                            <li key={album.collectionId}>
                                                <div className="card">
                                                    <div className="card-content">
                                                        <div className="media">
                                                            <div className="media-left">
                                                                <figure className="image is-48x48">
                                                                    <img src={album.artworkUrl60} alt="Album cover" />
                                                                </figure>
                                                            </div>
                                                            <div className="media-content">
                                                                <p className="title is-4">{album.collectionName}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </section>
                        :
                        <h1>LOADING...</h1>
                }
            </div>
        );
    }
}

export default AlbumsSite;