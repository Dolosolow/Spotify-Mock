import React from 'react';
import './TrackCover.scss';

const TrackCover = ({ vpm, track, show, toggleControls }) => {
  return vpm && track.vpm ? (
    <video onClick={toggleControls} className={`vid ${show && "darken"}`} muted loop autoPlay playsInline>
        <source src={`https://res.cloudinary.com/dnrj5jpxf/video/upload/v1583213581/${track.id}.mov`} />
    </video>
) : (
    <div className='Trackpage__img'>
        <img src={track.cover} alt="" />
    </div>
)
}

export default TrackCover;