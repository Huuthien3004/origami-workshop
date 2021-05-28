import React from 'react';
import logo from '../../img/logo1.png'
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <nav className="Navigation" >
            <ul>
                <li className="listItem" onClick={() => scroll.scrollToTop()}>
                    <img src={logo} alt="img" style={{ width: '80.5%' }} />
                </li>

                <li className="listItem">
                    <Link to="/">Post</Link>
                </li>

                <li className="listItem">
                    <Link to="/comment">Comments</Link>
                </li>

                <li className="listItem">
                    <Link to="/register">Register</Link>
                </li>

                <li className="listItem">
                    <Link to="/login">Login</Link>
                </li>

                <li className="listItem">
                    <Link to="/profile">Profile</Link>
                </li>

            </ul>
        </nav>
    );
}

export default Navbar;