import React, { Component } from 'react';
import { Link } from "react-router-dom";

class AlbumsSite extends Component {

    render() {

        const { albums } = this.props;

        return (
            <div>
                {
                    albums.length !== 0
                        ?
                        <section>
                            <div className='pa10 height85vh albums-border of-scroll '>
                                <ul>
                                    {albums.map(
                                        album => {
                                            return (
                                                (album.collectionId)
                                                ?
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
                                                                    <p className="title is-4 pa5">{album.collectionName}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                :
                                                null
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                        </section>
                        :
                        <h1>Type an artist name in the <Link to="/">search box.</Link></h1>
                }
            </div>
        );
    }
}

export default AlbumsSite;