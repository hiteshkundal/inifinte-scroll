import React, { useState, useEffect, useRef, useCallback } from 'react';
import { fetchImages } from '../../api/fetch-images';
import Post from '../../components/Post/Post';
import Loader from '../../components/Loader/Loader';
import Error from '../../components/Error/Error';

import style from './Feed.module.scss';


const Feed = () => {
    const [images, setImages] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        setError(false);
        fetchImages(pageNumber)
            .then((fetchedImages) => {
                setImages((prevImages) => [...prevImages, ...fetchedImages])
                setLoading(false);
            })
            .catch((err) => {
                setError(true)
                console.log(err);
            })

    }, [pageNumber])

    const lastImageObserver = useRef();

    //<---------bad version of callback---------->
    // const lastImageRef = ((node) => {
    //     if (loading) {
    //         return;
    //     }
    //     if (lastImageObserver.current) {
    //         lastImageObserver.current.disconnect();
    //     }
    //     lastImageObserver.current = new IntersectionObserver((entries) => {
    //         if (entries[0].isIntersecting) {
    //             setPageNumber((prevPage) => prevPage + 1)
    //         }
    //     })

    //     if (node) {
    //         lastImageObserver.current.observe(node);
    //     }
    // });
    //<----------------------------------------------->

    const lastImageRef = useCallback((node) => {
        if (loading) {
            return;
        }
        if (lastImageObserver.current) {
            lastImageObserver.current.disconnect();
        }
        lastImageObserver.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPageNumber((prevPage) => prevPage + 1)
            }
        })

        if (node) {
            lastImageObserver.current.observe(node);
        }
    }, [loading]);


    return (
        <article className={style.Feed}>
            {images.map((photo, index) => {
                if (index === images.length - 1) {
                    return <Post key={photo._id}
                        ref={lastImageRef}
                        imageUrl={photo.src.large2x}
                        profileImg={photo.src.tiny}
                        authorName={photo.photographer}
                        photographerUrl={photo.photographer_url}
                    />
                } else {
                    return <Post key={photo._id}
                        imageUrl={photo.src.large2x}
                        profileImg={photo.src.tiny}
                        authorName={photo.photographer}
                        photographerUrl={photo.photographer_url}
                    />
                }

            })}
            {loading && <Loader />}
            {error && <Error />}
        </article>
    )
}

export default Feed;