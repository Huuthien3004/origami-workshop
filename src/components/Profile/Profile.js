import React from 'react';
import Post from '../Post/Post'

function Profile(props) {
    return (
        <div className='Profile'>
            <img src='https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg' alt='profile-icon' />
            <div className='personal-info'>
                <p>
                    <span>Email: </span>
                    thiennhgcd18399@fpt.edu.vn
                </p>
                <p>
                    <span>Post: </span>
                    3
                </p>
            </div>
            <div>
                <h2>3 of your recent posts</h2>
                <Post />
            </div>
        </div>
    );
}

export default Profile;