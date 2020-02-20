import React, { Component } from 'react';

import Searchbar from '../../SearchBar/Searchbar';
import './FilterSearch.css';

export default class FilterSearch extends Component {
    render() {
        return (
            <div className='f-srh'>
                <div className='f-srh-line'>
                    <Searchbar 
                    isForm={ true }
                    width='70%'
                    padding='8px 30px'
                    color='#fff' 
                    background='#414141'
                    caretColor='#1db954'
                    placeholder='Search'
                    name='search'
                    />
                    <span onClick={ () => this.props.history.push('/srh/browse') }>Cancel</span>
                    <i className="fas fa-camera"></i>
                </div>
                <div className='f-srh-container'>
                    <h3>Play what you love</h3>
                    <p>Search for artists, songs, podcasts and more.</p>
                </div>
            </div>
        )
    }
}

// const { 
//     width, 
//     height, 
//     color, 
//     background, 
//     padding, 
//     caretColor, 
//     border,
//     borderRadius, 
//     name,
//     value,
//     placeholder, 
//     isForm, 
//     handleChange,
// } = this.props;