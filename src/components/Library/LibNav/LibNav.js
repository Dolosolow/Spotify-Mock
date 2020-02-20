import React from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';

import Podcasts from '../Podcasts/Podcasts';
import Playlists from '../Music/MusicPages/Playlists/Playlists';
import ArtistList from '../Music/MusicPages/Artists/ArtistList';

import './LibNav.css';

const LibNav = ({tracks}) => {
    return (
        <div className='library-nav'>
            <nav className='pnav'>
                <NavLink 
                    to='/collection'
                    className='nav-link'
                    activeClassName='activate'
                    activeStyle={{ opacity: '1' }}
                >
                    <h1>Music</h1>
                </NavLink>
                <NavLink 
                    to='/collection/podcasts'
                    className='nav-link'
                    activeClassName='activate'
                    activeStyle={{ opacity: '1' }}
                >
                    <h1>Podcasts</h1>
                </NavLink>
            </nav>
            <nav className='snav'>
                    <NavLink 
                        to='/collection/playlists'  
                        className='nav-link' 
                        activeClassName='activate'
                        activeStyle={{ opacity: '1' }}
                    >
                        Playlists
                    </NavLink>
                    <NavLink 
                        to='/collection/artists'  
                        className='nav-link' 
                        activeClassName='activate'
                        activeStyle={{ opacity: '1' }} 
                    >
                        Artists
                    </NavLink>
                    <NavLink 
                        to='/collection/albums'  
                        className='nav-link' 
                        activeClassName='activate'
                        activeStyle={{ opacity: '1' }} 
                    >
                        Albums
                    </NavLink>
                    <hr/>
                </nav>
                    <Switch>
                        <Route exact path='/collection/playlists' render={ props => <Playlists {...props} tracks={ tracks } /> } />
                        <Route exact path='/collection/artists' render={ props => <ArtistList {...props} artists={ () => {} } /> } />
                        <Route exact path='/collection/albums' render={ () => <h1 style={{ color: '#fff' }}>Hello Albums</h1> } />
                        <Redirect from='/collection' to='/collection/playlists' />
                    </Switch>
        </div>
    )
}

export default LibNav;