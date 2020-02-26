import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className='icon'>
                <NavLink exact to='/' className='nav-link' activeStyle={{opacity: '1'}}>
                    <i className="fas fa-home"></i>
                        Home
                </NavLink>
            </div>
            <div className='icon'>
                <NavLink to='/srh' className='nav-link' activeStyle={{opacity: '1'}}>
                    <i className="fas fa-search"></i>
                    Search
                </NavLink>
            </div>
            <div className='icon'>
                <NavLink to='/collection' className='nav-link' activeStyle={{opacity: '1'}}>
                    <i className="fas fa-book-open"></i>
                    Your Library
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;