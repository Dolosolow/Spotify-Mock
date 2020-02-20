import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Navbar from '../Navbar/Navbar';
import Search from '../Search/SearchNav/Search';
import TrackList from '../TrackList/TrackList';
import LibNav from '../Library/LibNav/LibNav';

const styles = {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 0.1)',
    fontSize: '2.5rem',
    alignSelf: 'center',
    justifySelf: 'center',
    marginTop: '280px',
}

const Main = ({seed}) => {
    return(
        <div>
            <Switch>
                <Route exact path='/collection/tracks' render={ props => <TrackList {...props} tracks={ seed } /> } />
                <Route path='/collection' render={ props => <LibNav {...props} tracks={ seed } /> } />
                <Route exact path='/srh' component={ Search } />
                <Route exact path='/' render={ () => <div style={styles}><h1>Coming Soon</h1></div> } />
            </Switch>
            <Navbar />
        </div>
    )
}

export default withRouter(Main);