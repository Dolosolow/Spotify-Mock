import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Searchbar.scss';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }

    handleChange = e => {
        this.setState({ search: e.target.value }, () => {
            this.props.setSearch(this.state.search);
        });
    }

    render() {
        const { 
            width, 
            height, 
            color, 
            background, 
            padding, 
            caretColor, 
            border,
            borderRadius, 
            placeholder, 
        } = this.props;

        return (
            <div className='searchbar' style={{ width , height }}>
                <span className="isrc fas fa-search fa-sm" style={{ color }}></span>
                <input 
                    type="text"
                    id='search'
                    name='search'
                    value={this.state.search}
                    autoComplete='off'
                    placeholder={ placeholder }
                    onChange={ this.handleChange }
                    style={{ color, background, caretColor, borderRadius, padding, border }}
                />
            </div>
        )
    }
}

SearchBar.propTypes = {
    color: PropTypes.string,
    background: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
}