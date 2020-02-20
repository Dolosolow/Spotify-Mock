import React, { Component } from 'react';

import './AddArtists.css';

export default class AddArtists extends Component {
    render() {
        return (
            <div className='a-artist'>
                <div className='p-icon'>
                    <span>+</span>
                </div>
                <h5>Add artists</h5>
            </div>
        )
    }
}
