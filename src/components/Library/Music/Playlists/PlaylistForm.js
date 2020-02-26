import React, { Component } from 'react';
import Searchbar from '../../../Searchbar/Searchbar';
import './PlaylistForm.css';

const PlaylistCreator = props => (
    <div className='p-form'>
        <form onSubmit={ props.onSubmit }>
            <div className='p-form-main'>
                <h3>Give your playlist a name.</h3>
                <Searchbar 
                    isForm={ true }
                    width='100%'
                    height='max-content'
                    padding='8px 5px'
                    background='#fff'
                    border='0.35px solid gray'
                    borderRadius='5px'
                    caretColor='#1db954'
                    placeholder='My playlist #5'
                    name='title'
                    value={ props.title }
                    handleChange={ props.handleChange }
                />
            </div>
            <hr className='style-six' />
            <div className='p-form-btns'>
                <button type='button' onClick={ props.toggleShow }>Cancel</button>
                <button type='submit'>Create</button>
            </div>
        </form>
    </div>
) 

export default class PlaylistForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            title: '',
            showForm: false
        };
    }

    handleChange = (e) => {
        this.setState({ title: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newPlaylist( this.state.title === '' ? 'My playlist #5' : this.state.title );
        this.setState({ title: '', showForm: false });
    }

    toggleShow = () => {
        this.setState({ showForm: !this.state.showForm });
    }

    render() {
        const { title } = this.state;
        return(
            <div>
                {
                    this.state.showForm ?
                    <PlaylistCreator 
                        toggleShow={ this.toggleShow } 
                        handleChange={ this.handleChange }
                        onSubmit={ this.handleSubmit } 
                        title={ title } 
                    /> 
                        : 
                    null
                }
                <div className='playlist' onClick={ () => this.toggleShow() }>
                    <div className='p-icon'>
                        <span>+</span>
                    </div>
                    <div className='p-body' >
                        <p style={{ marginTop: '10px', fontWeight: '700' }}>Create playlist</p>
                    </div>
                </div>
            </div>
        )
    }
}