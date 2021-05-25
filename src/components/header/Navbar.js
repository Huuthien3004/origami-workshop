import React, { Component } from 'react';
import NavbarItem from './NavbarItem';

export class Navbar extends Component {
    state = {
        items: [
            {
                nav_title: 'Going to 1'
            },
            {
                nav_title: 'Going to 2'
            },
            {
                nav_title: 'Going to 3'
            },
            {
                nav_title: 'Going to 4'
            },
            {
                nav_title: 'Going to 5'
            },
            {
                nav_title: 'Going to 6'
            },
            {
                nav_title: 'Going to 7'
            },
            {
                nav_title: 'Going to 8'
            },
            {
                nav_title: 'Going to 9'
            },
            {
                nav_title: 'Going to 10'
            },
            {
                nav_title: 'Going to 11'
            },
        ],
    }
    render() {
        return (
            <nav className="Navigation">
                <ul>
                    <img src="/white-origami-bird.png" style={logoStyle} alt="prop" />
                    {this.state.items.map((item) => (
                        <NavbarItem key={item.navTitle} item={item} />
                    ))}
                </ul>               
            </nav>                         
        )
    }
}


const logoStyle = {
    width: '7.5rem',
    margin: '0.5rem',
}

export default Navbar