import React from 'react';

import style from './PostImg.module.scss';

const PostImg = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className={style.PostImg}>
            <img src={props.imageUrl} alt="images" />
        </div>
    )
})

export default PostImg;