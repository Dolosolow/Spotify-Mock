import React, { Component } from 'react';
import uuid from 'uuid/v4';

import ListContainer from '../../ListContainer';
import AddArtists from './AddArtists';
import Artist from './Artist';

//handle each component list filter through parent component
// pass to listcontainer which has fitler button linked with handleFilter method

export default class ArtistList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            playlists: Array.from({ length: 2 }),
            user: 'Jochy',
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
        const seedData = { title: 'Liked Songs', author: this.state.user, tracks: this.props.tracks };
        this.setState({ playlists: [...this.state.playlists, seedData] });
    }


    render() {
        const artistList = this.state.playlists.map((artist, i) => (
            <Artist 
            key={ i }
            id={ i }
            name='Tory Lanez'
            />
        ));

        return (
            <ListContainer title='Artists'>
                {
                    artistList.reverse()
                }
                <AddArtists />
            </ListContainer>
        )
    }
}