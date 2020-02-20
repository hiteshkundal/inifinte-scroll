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
    const [available, setAvailable] = useState(true);

    useEffect(() => {
        setLoading(true);
        setError(false);
        if(pageNumber === 16) {
            setAvailable(false);
            return;
        }
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

    const lastImageRef = useCallback((node) => {
        if (loading) {
            return;
        }
        if(pageNumber === 16) {
            setAvailable(false);
        }
       
        lastImageObserver.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setPageNumber((prevPage) => prevPage + 1)
            }
        })

        if (node) {
            lastImageObserver.current.observe(node);
        }
        return () =>  lastImageObserver.current.disconnect();
    }, [loading, pageNumber]);


    return (
        <article className={style.Feed}>
            {images.map((photo, index) => {
                return <Post
                    key={photo._id}
                    ref={index === images.length - 1 ? lastImageRef : null}
                    imageUrl={photo.src.large2x}
                    profileImg={photo.src.tiny}
                    authorName={photo.photographer}
                    photographerUrl={photo.photographer_url}
                />
            })}
            {loading && available &&  <Loader />}
            {error && <Error />}
        </article>
    )
}

export default Feed;