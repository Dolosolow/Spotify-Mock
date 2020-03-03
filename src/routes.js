import React from 'react';
import { Route } from "react-router-dom";
import Artists from './components/Library/Music/Artists';
import BrowseSearch from './components/Search/BrowseSearch';
import FilterSearch from './components/Search/FilterSearch';
import LibNav from './components/Library/LibNav';
import Main from './components/Main';
import Playlists from './components/Library/Music/Playlists';
import Search from './components/Search/SearchNav';
import TempPage from './components/Search/TempPage';
import TrackList from './components/TrackList';
import Trackpage from './components/Trackpage';

const styles = {
width: '100%',
height: '100%',
textAlign: 'center',
color: 'rgba(255, 255, 255, 0.1)',
fontSize: '2rem',
alignSelf: 'center',
justifySelf: 'center',
marginTop: '280px',
}

const ROUTES = [
	{ exact: true, path: '/', component: () => <div style={styles}><h1>Coming Soon</h1></div> },
	{
		exact: true,
		path: '/track/:id',
		component: Trackpage
	},
	{
		exact: true,
		path: '/collection/tracks',
		component: TrackList
	},
	{
		exact: false,
		path: '/collection',
		component: LibNav,
		routes: [
			{
				exact: true,
				path: '/collection/playlists',
				component: Playlists
			},
			{
				exact: true,
				path: '/collection/artists',
				component: Artists
			},
			{
				exact: true,
				path: '/collection/albums',
				component: () => <h1 style={{ color: '#fff' }}>Hello Albums</h1>
			}
		]
	},
	{
		exact: false,
		path: '/srh',
		component: Search,
		routes: [
			{
				exact: true,
				path: '/srh/browse/:id',
				component: TempPage
			},
			{
				exact: true,
				path: '/srh/browse',
				component: BrowseSearch,
			},
			{
				exact: true,
				path: '/srh/filter',
				component: FilterSearch
			}
		]
	}
];

const createRoute = (rte, rteProps) => {
	const { exact, path, component: Component } = rte;
	const expProps = rteProps.find(prop => prop.key === path);
	
	if(expProps) {
		return <Route key={path} exact={exact} path={path} render={props => <Component {...props} {...expProps.props} />} />;
	}
	return <Route key={path} exact={exact} path={path} component={Component} />;
}

export const renderRoutes = (routes, rteProps=[], key= '') => {
	let renderedRoutes = [];

	if(key.length > 0) {
		const foundRte = routes.find(rte => rte.path === key);

		if(foundRte.routes) {		
			renderedRoutes = foundRte.routes.map(rte => {
				return createRoute(rte, rteProps);
			});
		}
	} else {
		renderedRoutes = routes.map(rte => {
			return createRoute(rte, rteProps);
		})
	}
	return renderedRoutes;
}

export default ROUTES;