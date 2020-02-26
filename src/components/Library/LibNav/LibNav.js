import React from 'react';
import { Switch, NavLink, Redirect } from 'react-router-dom';
import ROUTES, { renderRoutes } from "../../../routes";

import './LibNav.css';

const LibNav = ({tracks}) => {
    const routeProps = [{ key: '/collection/playlists', props: { tracks } }];
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
                        {
                            renderRoutes(ROUTES, routeProps, '/collection')
                        }
                        <Redirect exact from='/collection' to='/collection/playlists' />
                    </Switch>
        </div>
    )
}

export default LibNav;