import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from './components/Main';

import logo from './assets/imgs/logo.png';
import seed from './data/tracks.json';
import './App.scss';
import Trackpage from './components/TrackPage';

// USE DEEZER API FROM RAPIDAPI SITE TO GET MUSIC DATA

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: false, loaded: false }
  }

  componentDidMount() {
    if(!this.state.loaded) {
      this.setState({ isLoading: true, loaded: true }, () => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 3000);
      });
    }
  }

  render() {
    // if(this.state.isLoading) {
    //   return (
    //     <div className="App">
    //       <div className='splash-screen'>
    //         <img src={ logo } alt=""/>
    //       </div>
    //     </div>
    //   )
    // }
    return (
      <div className='App'>
        <Switch>
            <Route exact path={`/track/${seed[1].id}`} render={ props => <Trackpage {...props} track={seed[1]} isPlaying={false} vpm={true} /> } />
            <Route exact path={`/track/${seed[2].id}`} render={ props => <Trackpage {...props} track={seed[1]} isPlaying={false} /> } />
            <Route path='/' render={() => <Main seed={seed} /> } />
            {/* <Route render={() => <h1>Not found!</h1>} /> */}
        </Switch>
      </div>
    )
  }
}

export default App;