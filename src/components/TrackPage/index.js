import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Trackpage.scss';

class Trackpage extends Component {
    handlePlayChange = () => {
        this.props.handlePlayChange();
    }

    render() {
        const { track, isPlaying, vpm } = this.props;

        return (
            <div className='Trackpage' style={{background: `${vpm && '#000'}`}}>
                <div className='Trackpage__nav'>
                    <span onClick={this.props.history.goBack} className='Trackpage__nav_btn'>
                        <i className="fas fa-chevron-down"></i>
                    </span>
                    <span style={{ cursor: 'pointer' }} className='Trackpage__nav_options'>
                        • • •
                    </span>
                </div>
                {
                    !vpm ? (
                        <div className='Trackpage__img'>
                            <img src={track.cover} alt="" />
                        </div>
                    ) : (
                        <video className='vid' id='vid' muted loop autoPlay>
                            <source src="https://srv-file7.gofile.io/download/5gBI87/bg_vwrap.m4v"/>
                        </video>
                    )
                }
                <div className="Trackpage__body_container">
                    <div className='Trackpage__details'>
                        <div>
                            <h3 className='title'>{track.title}</h3>
                            <p className='artist'>{track.artist}</p>
                        </div>
                        <span><i className="fas fa-heart"></i></span>
                    </div>

                    <div className='Trackpage__slider'>
                        <Slider
                            defaultValue={0.00}
                            min={0.00}
                            max={3.14}
                            step={0.01}
                        />
                        <div className='Trackpage__dur'>
                            <span>0:00</span>
                            <span>-0:00</span>
                        </div>
                    </div>

                    <div className='Trackpage__controls'>
                        <i className="fas fa-random" style={{fontSize: '16px'}}></i>
                        <i className="fas fa-step-backward"></i>
                        <div className='playpause__wrap'>
                            <i
                                onClick={this.handlePlayChange}
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