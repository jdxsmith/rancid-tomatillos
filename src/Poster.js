import React from 'react';
import './Poster.css';

const Poster = ({image}) => {
    return (
        <article>
            <img className='poster' src={image}></img>
        </article>
    )
}

export default Poster;