import React from 'react';
import { NavLink } from "react-router-dom";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Trackbar.scss';

const Trackbar = ({isPlaying, audioData, curTrack, handlePlayPause}) => {
  const handlePlayPauseChange = e => {
    e.preventDefault();
    handlePlayPause();
  }

  if(Object.keys(curTrack).length > 0) {
    return (
      <NavLink to={`/track/${curTrack.id}`} className='trackbar'>
        <Slider
          step={1}
          min={0}
          max={audioData.totalDuration}
          defaultValue={0}
          value={audioData.trackCurrentTime}
        />
        <div className='trackbar__container'>
          <img src={curTrack.cover} alt={curTrack.title} />
          <div className='trackbar__body'>
            <h5>{curTrack.title} <span className='dot'>•</span> <span>{curTrack.artist.split(',')[0]}</span></h5>
            <h6><span><i className="fas fa-desktop"></i></span>Device Available</h6>
          </div>
          <i onClick={handlePlayPauseChange} className={`playpause fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
        </div>
        <hr/>
      </NavLink>
    )
  }
  return null
}

export default Trackbar;