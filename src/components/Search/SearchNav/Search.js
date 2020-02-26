import React, { Component } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import ROUTES, { renderRoutes } from "../../../routes";

import './Search.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state ={ path: '#', bg: '' };
  }

  handleClick = (path, bg) => {
    this.setState({ path, bg });
  }

  render() {
    const { path, bg } = this.state;
    const routeProps = [
      { key: `/srh/browse/:id`, props: { title: path, bg: bg } }, 
      { key: '/srh/browse', props: { handleClick: this.handleClick } }
    ];
    return (
      <div className='srh-container'>
        <Switch>
          {
            renderRoutes(ROUTES, routeProps, '/srh')
          }
          <Redirect exact from='/srh' to='/srh/browse' />
        </Switch>
      </div>
    )
  }
}

