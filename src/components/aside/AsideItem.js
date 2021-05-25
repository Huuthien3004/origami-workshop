import React, { Component } from 'react'

export class AsideItem extends Component {
    render() {
        const {aside_title} = this.props.item;
        return (
            <div>
                <li className="listItem">
                <a href="!">
                    {aside_title}
                </a>
            </li>
            </div>
        )
    }
}

export default AsideItem