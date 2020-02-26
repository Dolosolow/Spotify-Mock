import React, { Component } from 'react';
import './Track.scss';

export default class Track extends Component {    
    handleDownloadState = () => {
        if(this.props.isDownloading) {
            return <i className="far fa-arrow-alt-circle-down fa-lg" style={{ paddingRight: '6px' }}></i>
        }
        if(this.props.downloaded) {
            return <i className="fas fa-arrow-circle-down fa-lg" style={{ paddingRight: '6px', color: 'var(--sgreen)' }}></i>
        }
    }

    trackSelect = track => {
        this.props.trackSelect(track);
    }

    render() {
        const { id, title, album, artist } = this.props.track;
        const downloadState = this.handleDownloadState();
        return (
            <div className='track' onClick={ () => this.trackSelect(this.props.track) }>
                <h5 style={{ color: this.props.curTrack.id === id ? '#3bd471' : '' }}>{title}</h5>
                <h6>
                {
                    downloadState
                }
                    {artist} • {album}
                </h6>
                <span className='opt' onClick={() => {}}>•••</span>
            </div>
        )
    }
}
