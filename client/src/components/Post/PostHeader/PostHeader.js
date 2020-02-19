import React from 'react';

import style from './PostHeader.module.scss';

const PostHeader = (props) => {
    return (
        <div className={style.PostHeader}>
            <div >
                <img src={props.profileImg} alt="profile" />
            </div>
            <p>{props.authorName}</p>
        </div>
    )
}

export default PostHeader;