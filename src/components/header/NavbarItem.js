import React, { Component } from 'react'

export class NavbarItem extends Component {
    render() {
        const {nav_title} = this.props.item;

        return (
            <li className="listItem">
                <a href="!">
                    {nav_title}
                </a>
            </li>
        )
    }
}

export default NavbarItem