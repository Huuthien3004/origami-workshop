import React from 'react';
import CreateComment from './CreateComment';
import axios from "axios";

function Comment(props) {

    return (
        <div className='Input'>
            <CreateComment />

            <div>
                <h2>Last 3 post on your wall</h2>
            </div>
        </div>

    );
}

export default Comment;