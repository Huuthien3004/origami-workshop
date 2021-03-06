import React from 'react';
import logo3 from '../../img/blue-origami-bird-flipped.png';
import { animateScroll as scroll } from 'react-scroll'
import { Link } from 'react-router-dom';

function Footer(props) {

    return (
        <footer className="Footer" >
            <ul>
                <li className="listItem" >
                    <Link to="/">Post</Link>
                </li>

                <li className="listItem">
                    <Link to="/Comment">Comment</Link>
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

                <li className="listItem" onClick={() => scroll.scrollToTop()}>
                    <img src={logo3} alt="img" />
                </li>
            </ul>
        </footer>
    );
}

export default Footer;