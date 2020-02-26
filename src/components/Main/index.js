import React from 'react';
import { Switch } from "react-router-dom";
import ROUTES, { renderRoutes } from "../../routes";
import Navbar from '../Navbar/Navbar';
import Trackbar from '../Trackbar';

const Main = ({seed, trackSelect, curTrack, isPlaying, audioData, handlePlayPause}) => {
  const routeProps = [{ key: '/collection', props: {tracks: seed} }, { key:'/collection/tracks', props: {tracks: seed, trackSelect: trackSelect, curTrack } }];
  return(
    <div>
      <Switch>
				{
					renderRoutes(ROUTES, routeProps)
				}
      </Switch>
      <Trackbar isPlaying={isPlaying} audioData={audioData} curTrack={curTrack} handlePlayPause={handlePlayPause} />
      <Navbar />
    </div>
  )
}

export default Main;