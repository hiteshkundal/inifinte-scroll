import React from 'react';

import style from './PostFooter.module.scss';

const PostFooter = (props) => {
    const {photographerUrl, authorName} = props;

    return (
        <div className={style.PostFooter}>
            <p>Photo Credit  <a href={photographerUrl}
                target="_blank"
                rel="noopener noreferrer"
            >@{authorName}</a></p>
        </div>
    )
}

export default PostFooter;