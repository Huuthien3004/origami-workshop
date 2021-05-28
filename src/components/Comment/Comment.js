import React, { useEffect, useState } from 'react';
import CreateComment from './CreateComment';
import LatestPost from './LatestPost';
import axios from "axios";

function Comment(props) {
    const [latestPostList, setLatestPostList] = useState([])
    useEffect(() => {
        async function getLatestPost() {
            try {
                const response = await axios.get('http://localhost:9999/api/origami/all')
                const { data } = response

                setLatestPostList(data)
            } catch (error) {
                console.log('Fail to get: ', error.message);
            }
        }
        getLatestPost()
    }, [])

    return (
        <div className='Input'>
            <CreateComment />

            <div>
                <h2>Last 3 post on your wall</h2>
                <LatestPost latestPosts={latestPostList} />
            </div>
        </div>

    );
}

export default Comment;