import React, { Component } from 'react'

export class FooterItem extends Component {
    render() {
        const {footer_title} = this.props.item;

        return (
                <li className="listItem">
                <a href="!">
                    {footer_title}
                </a>
            </li>
        )
    }
}

export default FooterItem