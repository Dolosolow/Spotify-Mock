import React from 'react';
import { Link } from 'react-router-dom';

import './Playlist.css';

const Playlist = ({ title, author, tracks }) => {
    return(
        <Link to='/collection/tracks' className='playlist'>
            <div className='p-icon'>
                {
                    tracks.length === 0 ? <span><i className="fas fa-music"></i></span> : <img src={ tracks[0].cover } alt=""/>
                }
            </div>
            <div className='p-body'>
                <p style={{fontSize: '0.9rem', fontWeight: '700'}}>{ title }</p>
                <p style={{fontSize: '0.8rem', color: 'rgba(255, 255, 255, 0.638)'}}>by { author }</p>
            </div>
        </Link>
    )
}

export default Playlist;