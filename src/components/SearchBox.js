import React, { Component } from 'react';

class SearchBox extends Component {
    render() {
        return (
            <div className='control field'>
                <input
                    className='input fs-13r rounded-bottom-6'
                    type='text'
                    placeholder='Type Artist Name'
                    onChange={this.props.searchChange}
                />
            </div>
        );
    }
}

export default SearchBox;