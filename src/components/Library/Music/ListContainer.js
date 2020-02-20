import React, { Component } from 'react';

import Searchbar from '../../SearchBar/Searchbar';

import './ListContainer.scss';

export default class ListContainer extends Component {
    render() {
        return (
            <div className='list-container'>
                <div className='filter-line'>
                    <Searchbar 
                        color='#fff' 
                        background='#282828' 
                        padding='8px 30px'
                        width='80%' 
                        height='30px' 
                        placeholder={`Find in ${ this.props.title }`}
                        caretColor='#1db954'
                        name='search'
                    />
                    <button className='f-btn' onClick={ () => {} }>Filters</button>
                </div>
                { this.props.children }
            </div>
        )
    }
}
