import React, { Component } from 'react';
import { seekTime } from "../../utils/audioTimeUpdate";
import Slider from 'rc-slider';
import TrackCover from './TrackCover';
import 'rc-slider/assets/index.css';
import './Trackpage.scss';

class Trackpage extends Component {
  constructor(props) {
    super(props);
    this.state = { showControls: true, progress: 0 };
  }

  toggleControls = () => {
    this.setState(prevState => ({ showControls: !prevState.showControls }));
  }

  playPause = () => {
    this.props.handlePlayPause();
  }

  handleReplay = () => {
    this.props.audio.currentTime = 0;
  }

  render() {
    const { history, match, vpm, playlist, isPlaying, audioData } = this.props;
    const show = this.state.showControls;
    const track = playlist.find(track => track.id === Number(match.params.id));
    let currentTime = audioData.currentTime;
    let duration = audioData.duration;
    return (
      <div className={`Trackpage ${vpm && track.vpm ? "bg-vpm" : ""}`}>
          <div className={`Trackpage__nav ${!show ? 'hide' : ''}`}>
              <span onClick={history.goBack} className='Trackpage__nav_btn'>
                  <i className="fas fa-chevron-down"></i>
              </span>
              <span style={{ cursor: 'pointer' }} className='Trackpage__nav_options'>
                  • • •
              </span>
          </div>
          <TrackCover vpm={vpm} track={track} show={show} toggleControls={this.toggleControls} />
          {
            !show && (
              <div className='banner'>
                <img src={track.cover} alt={track.artist.split(',')[0]} />
                <h5>by {track.artist.split(',')[0]}</h5>
              </div>
            )
          }
          <div className={`Trackpage__body_container ${!show ? 'hide' : ''}`}>
              <div className='Trackpage__details'>
                  <div>
                      <h3 className='title'>{track.title}</h3>
                      <p className='artist'>{track.artist}</p>
                  </div>
                  <span><i className="fas fa-heart"></i></span>
              </div>
  
              <div className='Trackpage__slider'>
                  <Slider
                      step={1}
                      min={0}
                      max={audioData.totalDuration}
                      defaultValue={0}
                      value={audioData.trackCurrentTime}
                      onChange={value => {
                        seekTime(this.props.audio, value);
                        this.props.audio.pause();
                      }}
                      onAfterChange={() => this.props.audio.play()}
                  />
                  <div className='Trackpage__dur'>
                      <span>{currentTime}</span>
                      <span>-{duration}</span>
                  </div>
              </div>
  
              <div className='Trackpage__controls'>
                  <i className="fas fa-random" style={{fontSize: '16px'}}></i>
                  <i className="fas fa-step-backward" onClick={this.handleReplay}></i>
                  <div className='playpause__wrap'>
                      <i
                          onClick={this.playPause}
                          className={`playpause__control fas fa-${isPlaying ? 'pause' : 'play'}`}>
                      </i>
                  </div>
                  <i className="fas fa-step-forward"></i>
                  <i className="fas fa-redo" style={{fontSize: '16px'}}></i>
              </div>
  
              <div className='Trackpage__misc'>
                  <div className="Trackpage__misc_btooth">
                      <i className="fab fa-bluetooth-b"></i>
                      <span>EL VECINO AIRPODS</span>
                  </div>
                  <i className="fas fa-bars" style={{color: '#fff', opacity: 0.7}}></i>
              </div>
          </div>
      </div>
    )
  }
}

export default Trackpage;