import React, { Component } from 'react'
import AsideItem from './AsideItem';

export class Aside extends Component {
    state = {
        items: [
            {
                aside_title: 'Going to 1'
            },
            {
                aside_title: 'Going to 2'
            },
            {
                aside_title: 'Going to 3'
            },
            {
                aside_title: 'Going to 4'
            },
            {
                aside_title: 'Going to 5'
            },
            {
                aside_title: 'Going to 6'
            },
            {
                aside_title: 'Going to 7'
            },
            {
                aside_title: 'Going to 8'
            },
            {
                aside_title: 'Going to 9'
            },
            {
                aside_title: 'Going to 10'
            },
            {
                aside_title: 'Going to 11'
            },
        ],
    }
    render() {
        return (
                <aside className="Aside" style={style}>
                    {this.state.items.map((item) => (
                        <AsideItem key={item.aside_title} item={item} />
                    ))}
                </aside>
        )
    }
}

const style = {
    top: '10rem',
    position: 'absolute'
}

export default Aside;