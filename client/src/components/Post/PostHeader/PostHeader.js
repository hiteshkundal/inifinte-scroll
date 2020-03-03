import React from 'react';

import style from './PostHeader.module.scss';

const PostHeader = (props) => {
    const {profileImg, authorName} = props;
    
    return (
        <div className={style.PostHeader}>
            <div >
                <img src={profileImg} alt="profile" />
            </div>
            <p>{authorName}</p>
        </div>
    )
}

export default PostHeader;