import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Track.scss';

export default class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isPlaying: false,
        }
    }

    handlePlayChange = () => {
        this.setState({ isPlaying: !this.state.isPlaying });
    }
    
    handleDownloadState = () => {
        if(this.props.isDownloading) {
            return <i className="far fa-arrow-alt-circle-down fa-lg" style={{ paddingRight: '6px' }}></i>
        }
        if(this.props.downloaded) {
            return <i className="fas fa-arrow-circle-down fa-lg" style={{ paddingRight: '6px', color: 'var(--sgreen)' }}></i>
        }
    }

    render() {
        const { id, title, album, artist } = this.props;
        const downloadState = this.handleDownloadState();
        return (
            <NavLink to={`/track/${id}`} className='track' onClick={ this.handlePlayChange }>
                <h5 style={{ color: this.state.isPlaying && '#1bcc59' }}>{title}</h5>
                <h6>
                {
                    downloadState
                }
                    {artist} • {album}
                </h6>
                <span className='opt' onClick={() => {}}>•••</span>
            </NavLink>
        )
    }
}
