import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Artist.css';

export default class Artist extends Component {
    render() {
        return (
            <Link to={ `/lib/m/artists/${ this.props.id }` } className='artist'>
                <img src="https://celebrityinsider.org/wp-content/uploads/2019/06/tory-lanez.jpeg" alt=""/>
                <h5>{ this.props.name }</h5>
            </Link>
        )
    }
}
