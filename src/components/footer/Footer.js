import React, { Component } from 'react'
import FooterItem from './FooterItem'

export class Footer extends Component {
    state = {
        items: [
            {
                footer_title: 'Going to 1'
            },
            {
                footer_title: 'Going to 2'
            },
            {
                footer_title: 'Going to 3'
            },
            {
                footer_title: 'Going to 4'
            },
            {
                footer_title: 'Going to 5'
            },
            {
                footer_title: 'Going to 6'
            },
            {
                footer_title: 'Going to 7'
            },
            {
                footer_title: 'Going to 8'
            },
            {
                footer_title: 'Going to 9'
            },
            {
                footer_title: 'Going to 10'
            },
            {
                footer_title: 'Going to 11'
            },
        ],
    }
    render() {
        return (
            <footer className="Footer">
               <ul>
                    {this.state.items.map((item) => (
                        <FooterItem key={item.footer_title} item={item} />
                    ))}
                    <img src="/blue-origami-bird-flipped.png" className="logoFooter" alt="prop" />
                </ul>  
            </footer>
        )
    }
}

export default Footer