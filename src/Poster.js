import React from 'react';
import './Poster.css';

const Poster = ({image, id, findPoster}) => {
    return (
        <article>
            <img alt='movie poster' className='poster' onClick={() => findPoster(id)} src={image}></img>
        </article>
    )
}

export default Poster;