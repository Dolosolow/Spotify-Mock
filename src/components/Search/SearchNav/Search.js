import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import convert from 'color-convert';

import BrowseSearch from '../BrowseSearch/BrowseSearch';
import FilterSearch from '../FilterSearch/FilterSearch';

import './Search.css';

const TempPage = props => (
    <div style={{
        background: `linear-gradient(to bottom, rgba(${ convert.hex.rgb(props.bg) }, 0.4) 0%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 71%, rgba(0,0,0,1) 91%, rgba(0,0,0,1) 100%)`, 
        width: '100%', 
        height: '100%', 
        paddingTop: '60px',
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'flex-start' 
        }} 
    >
        <h1>{ props.title }</h1>
    </div>
)

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={ path: '#', bg: '' };
    }

    handleClick = (path, bg) => {
        this.setState({ path, bg });
    }

    render() {
        const { path, bg } = this.state;
        return (
            <div className='srh-container'>
                <Router>
                    <Switch>
                        <Route exact path='/srh/filter' component={ props => <FilterSearch { ...props } /> } />
                        <Route exact path={`/srh/browse/${ path }`} component={ () => <TempPage title={ path } bg={ bg } /> } />
                        <Route exact path='/srh/browse' component={ () => <BrowseSearch handleClick={ this.handleClick } /> } />
                        <Redirect exact from='/srh' to='/srh/browse' />
                    </Switch>
                </Router>
            </div>
        )
    }
}