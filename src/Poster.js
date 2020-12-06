import React from 'react';
import './Poster.css';

const Poster = ({image, id, findPoster, isSinglePoster}) => {
    return (
        <article>
            <img alt='movie poster' className={isSinglePoster === true ? 'locked-poster' : 'poster'} onClick={() => findPoster(id)} src={image}></img> 
        </article>
    )
}

export default Poster;