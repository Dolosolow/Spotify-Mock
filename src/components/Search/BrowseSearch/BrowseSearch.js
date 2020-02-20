import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Data from '../../../data/browserData.json';
import './BrowseSearch.css';

const colors = ['#e3a549', '#aeebd6', '#ed64c6', '#f04646', '#5294ff', '#ffc83d', '#1226ff', '#88c783'];

const Block = props => (
    <NavLink 
    className='srh-genre' 
    to={`/srh/browse/${ props.title }`} 
    onClick={ () => props.handleClick( props.title, props.bgColor ) }
    style={{ backgroundColor: `${ props.bgColor }`, textDecoration: 'none', color: '#fff' }}
    >
        <img src={ props.src } alt=""/>
        <p>{ props.title }</p>
    </NavLink>
)

export default class BrowseSearch extends Component {

    getData = type => {
        return Data.filter(d => d.type === type).map((d, i) => (
            <Block 
            key={i}
            title={ d.title } 
            bgColor={ colors[Math.floor(Math.random() * colors.length)] } 
            src={ d.cover }
            handleClick={ this.props.handleClick } 
            />
        ));
    }

    render() {
        const Genres = this.getData('music');
        const BrowseAll = this.getData('browse');

        return (
            <div className='srh'>
                <h2>Search</h2>
                <NavLink to='/srh/filter' className='srh-btn'>
                    <i className="fas fa-search" />
                    <p>Artists, songs, or podcasts</p>
                </NavLink>
                <div className='srh-genres'>
                    <h4 className='srh-title'>Browse all</h4>
                    <div className='srh-blk'>
                        { Genres }
                        { BrowseAll }
                    </div>
                </div>
            </div>
        )
    }
}