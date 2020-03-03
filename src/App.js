import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Main from './components/Main';
import Trackpage from './components/Trackpage';
import seed from './data/tracks.json';
import logo from './assets/imgs/logo.png';
import './App.scss';
import { 
  durationInMinutes, 
  durationInSeconds, 
  currentInMinutes, 
  currentInSeconds, 
} from "./utils/audioTimeUpdate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoading: false, 
      loaded: false,
      playlist: [],
      curTrack: {},
      curAudioData: { currentTime: '0:00', duration: '0:00', totalDuration: 0, trackCurrentTime: 0 }
    }
    this.audioRef = React.createRef();
  }

  handleTrackSelect = track => {
    if(this.state.curTrack.title === track.title) {
      this.audioRef.currentTime = 0;
      this.audioRef.play();
    } else {
      this.setState({ curTrack: track, isPlaying: true }, () => {
        this.audioRef.play();
      });
    }
  }

  handlePlayPause = () => {
    if(this.audioRef.paused) {
      this.audioRef.play();
      this.setState({ isPlaying: true });
    } else {
      this.audioRef.pause();
      this.setState({ isPlaying: false });
    }
  }

  handleTimeUpdate = () => {
    const audio = this.audioRef;
    let dSec = durationInSeconds(audio);
    let dMin = durationInMinutes(audio);
    let cSec = currentInSeconds(audio);
    let cMin = currentInMinutes(audio);
    let totalDuration = Math.floor(audio.duration);
    let trackCurrentTime = Math.floor(audio.currentTime);

    this.setState({
      curAudioData: { 
        currentTime: `${cMin}:${cSec < 10 ? '0' : ''}${cSec}`,
        duration: `${dMin}:${dSec < 10 ? '0' : ''}${dSec}`,
        totalDuration,
        trackCurrentTime
      }
    })
  }

  componentDidMount() {
    if(!this.state.loaded) {
      this.setState({ isLoading: true }, () => {
        setTimeout(() => {
          this.setState({ isLoading: false, loaded: true, playlist: seed });
        }, 3000);
      });
    }
  }

  render() {
    const { isLoading, isPlaying, playlist, curAudioData, curTrack } = this.state;
    if(isLoading) {
      return (
        <div className="App">
          <div className='splash-screen'>
            <img src={ logo } alt=""/>
          </div>
        </div>
      )
    }
    return (
      <div className='App'>
        <audio ref={input => this.audioRef = input} preload='none' src={curTrack.mp3} onTimeUpdate={this.handleTimeUpdate} />
        <Switch>
            <Route exact path={`/track/:id`} render={ props => (
              <Trackpage 
                {...props} 
                vpm={true} 
                audio={this.audioRef}
                audioData={curAudioData}
                playlist={playlist} 
                isPlaying={isPlaying} 
                trackSelect={this.handleTrackSelect}
                handlePlayPause={this.handlePlayPause}
              />
            )} />
            <Route path='/' render={() => (
              <Main 
                seed={seed} 
                trackSelect={this.handleTrackSelect} 
                curTrack={curTrack} 
                isPlaying={isPlaying}
                audioData={curAudioData}
                handlePlayPause={this.handlePlayPause} 
              />
            )} /> 
        </Switch>
      </div>
    )
  }
}

export default App;