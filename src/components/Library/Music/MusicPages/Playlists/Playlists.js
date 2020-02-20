import React, { Component } from 'react';
import uuid from 'uuid/v4';

import ListContainer from '../../ListContainer';
import PlaylistForm from './PlaylistForm';
import Playlist from './Playlist';

//handle each component list filter through parent component
// pass to listcontainer which has fitler button linked with handleFilter method

export default class Playlists extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playlists: [],
            user: 'Jochy'
        };
    }

    addNewPlaylist = playlistName => {
        const newPlaylist = { title: playlistName, author: this.state.user, tracks: [], id: uuid() };
        this.setState({ playlists: [...this.state.playlists, newPlaylist] });
    }
    
    handleFilter = () => {
        // enter handle for filtering list based on what is chosen maybe if-else/switch-case
    }

    componentDidMount() {
        const seedData = { id: 100, title: 'Liked Songs', author: this.state.user, tracks: this.props.tracks };
        this.setState({ playlists: [...this.state.playlists, seedData] });
    }


    render() {
        const playlists = this.state.playlists.map((playlist, i) => (
            <Playlist 
            key={i}
            pId={playlist.id}
            title={ playlist.title } 
            author={ playlist.author } 
            tracks={ playlist.tracks } 
            />
        ));

        return (
            <ListContainer title='playlists'>
                <PlaylistForm newPlaylist={ this.addNewPlaylist } />
                {
                    playlists.reverse()
                }
            </ListContainer>
        )
    }
}
