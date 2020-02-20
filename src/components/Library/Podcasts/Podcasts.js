import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom';

import './Podcasts.css';

const Podcasts = props => {
    return (
        <Router>
            <div className='pcnav'>
                <nav className='pcnav-nav'>
                    <NavLink 
                        to='/lib/p/episodes' 
                        exact 
                        className='nav-link' 
                        activeClassName='activate'
                        activeStyle={{ opacity: '1' }}
                    >
                        Episodes
                    </NavLink>
                    <NavLink 
                        to='/lib/p/downloads' 
                        exact 
                        className='nav-link' 
                        activeClassName='activate'
                        activeStyle={{ opacity: '1' }} 
                    >
                        Downloads
                    </NavLink>
                    <NavLink 
                        to='/lib/p/shows' 
                        exact 
                        className='nav-link' 
                        activeClassName='activate'
                        activeStyle={{ opacity: '1' }} 
                    >
                        Shows
                    </NavLink>
                    <hr/>
                </nav>
                <Switch>
                    <Route path='/lib/p/episodes' exact component={ () => <h1 style={{ color: '#fff' }}>Hello Episodes</h1> } />
                    <Route path='/lib/p/downloads' exact component={ () => <h1 style={{ color: '#fff' }}>Hello Downloads</h1> } />
                    <Route path='/lib/p/shows' exact component={ () => <h1 style={{ color: '#fff' }}>Hello Shows</h1> } />
                    <Redirect from="/lib/p" exact to="/lib/p/episodes" />
                </Switch>
            </div>
        </Router>
    )
}

export default Podcasts;