import React from 'react';
import PostHeader from './PostHeader/PostHeader';
import PostImg from './PostImg/PostImg';
import PostFooter from './PostFooter/PostFooter';

import style from './Post.module.scss';

const Post = React.forwardRef((props, ref) => {
    return (
        <div className={style.Post}>
            <PostHeader
                profileImg={props.profileImg}
                authorName={props.authorName}
            />
            <PostImg imageUrl={props.imageUrl} ref={ref} />
            <PostFooter
                authorName={props.authorName}
                photographerUrl={props.photographerUrl} />
        </div>
    )
})

export default Post;