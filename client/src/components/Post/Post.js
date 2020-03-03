import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import PostImg from './PostImg/PostImg';
import PostFooter from './PostFooter/PostFooter';

import style from './Post.module.scss';

const Post = React.forwardRef((props, ref) => {
    const {profileImg, authorName, imageUrl, photographerUrl} = props;
    
    return (
        <div className={style.Post}>
            <PostHeader
                profileImg={profileImg}
                authorName={authorName}
            />
            <PostImg imageUrl={imageUrl} ref={ref} />
            <PostFooter
                authorName={authorName}
                photographerUrl={photographerUrl} />
        </div>
    )
})

export default Post;