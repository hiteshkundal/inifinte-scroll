import React from 'react';

import style from './PostFooter.module.scss';

const PostFooter = (props) => {
    return (
        <div className={style.PostFooter}>
            <p>Photo Credit  <a href={props.photographerUrl}
                target="_blank"
                rel="noopener noreferrer"
            >@{props.authorName}</a></p>

        </div>
    )
}

export default PostFooter;