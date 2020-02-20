import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import Switch from 'react-switch';
import uuid from 'uuid/v4';
 
import Searchbar from '../SearchBar/Searchbar';
import Track from './Track';
import './TrackList.scss';

class TrackList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            bgOpacity: 0.5, 
            titleOpacity: 1, 
            checked: false, 
            isDownloading: false, 
            downloaded: false,
            tracks: [],
            search: ''
        }
    }

    handleScrollCheck = () => {
        const initialBgVal = 0.5;
        const initialTitleVal = 3;

        let scrollVal = this.refs.plsv.scrollTop;
        let bgScroll = initialBgVal - scrollVal / 200;
        let titleScroll = initialTitleVal - scrollVal / 30;
        this.setState({ bgOpacity: bgScroll < 0 ? 0 : bgScroll, titleOpacity: titleScroll < 0 ? 0 : titleScroll});
    }

    handleDownloaded = () => setTimeout(() => {
        this.setState(prevState => ({
            isDownloading: false,
            downloaded: true
        }))
    }, 2000);

    handleDownloading = () => {
        if(this.state.checked) {
            this.setState({
                isDownloading: false,
                checked: false,
                downloaded: false
            })
        }else {
            this.setState(prevState => ({
                isDownloading: true,
                checked: !prevState.checked,
                downloaded: false
            }), () => {
                this.handleDownloaded();
            })
        }
    }

    setSearch = search => {
        this.setState({ search: search});
    }

    optimizeTracklist = () => {
        const {search, tracks, downloaded, isDownloading} = this.state;

        const oTracks = tracks.filter(track => {
            return track.title.toLowerCase().includes(search.toLowerCase())
        })
        .map((track, i) => (
            <Track 
                key={uuid()} 
                id={track.id}
                title={track.title}
                album={track.album}
                artist={track.artist}
                downloaded={downloaded}
                isDownloading={isDownloading}
            />
        ));
        
        return oTracks;
    }

    componentDidMount() {
        this.setState({ tracks: this.props.tracks }, () => {
            window.addEventListener('scroll', this.handleScrollCheck);
        });
    }

    render() {
        const { bgOpacity, titleOpacity, checked, isDownloading, downloaded } = this.state;
        const tunes = this.optimizeTracklist();
        
        return (
            <div className='playlist-list'>
                <div className='playlist-list-bg-ol' style={{ opacity: bgOpacity }}></div>
                
                <i onClick={() => this.props.history.goBack() } className="arc fas fa-chevron-left pl-12" style={{background: bgOpacity <= 0.1 ? '#171717' : ''}}><span style={{opacity: bgOpacity <= 0.1 ? '1' : '0'}}>Liked Songs</span></i>
                <div ref='plsv' className='playlist-list-view' onScroll={this.handleScrollCheck}>
                
                    <div className='sFilter p-12'>
                        <Searchbar 
                            color='#fff' 
                            background='rgba(255, 255, 255, 0.2)' 
                            width='80%' 
                            height='30px' 
                            padding='8px 30px'
                            placeholder='Find in liked songs'
                            setSearch={this.setSearch}
                        />
                        <button className='f-btn'>Filter</button>
                    </div>
                    <h3 className='title' style={{ opacity: titleOpacity }}>Liked Songs</h3>
                    <div className='body-overlay' />
                    <div className='container'>
                        <button className='suf-btn'>Shuffle Play</button>
                        <button className='add_btn'>Add Songs</button>
                        <div className='download-switch p-12'>
                            <div className='download-txt'>
                                <p>
                                    {`${isDownloading ? 'Downloading...\n' : `${downloaded ? 'Downloaded' : 'Download'}`}`}
                                </p>
                                <h6>
                                    {`${isDownloading ? 'Waiting to download' : ''}`}
                                </h6>
                            </div>
                            <Switch
                                checked={checked}
                                onChange={this.handleDownloading}
                                onColor="#1ed760"
                                offColor='#282828'
                                onHandleColor="#fff"
                                handleDiameter={25}
                                uncheckedIcon={false}
                                checkedIcon={false}
                                height={28}
                                width={48}
                                className="react-switch"
                                id="material-switch"
                            />
                        </div>
                        <div className='trackList p-12'>
                            { tunes }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(TrackList);