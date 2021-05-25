import React, { Component } from 'react'

export class Post extends Component {
    render() {
        const {text} = this.props.post;
        return (
                <div className="Post">
                    <img src="/blue-origami-bird.png" alt="prop"/>
                    <p className="description">
                        {text}
                    </p>
                    <div>
                        <span>
                            <small>Author: </small>
                            ABC
                        </span>
                    </div>
                </div>
        )
    }
}

export default Post