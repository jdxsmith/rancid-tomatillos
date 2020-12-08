import React from 'react';
import './Poster.css';
import { Link } from 'react-router-dom';

const Poster = ({image, id, findPoster, isSinglePoster}) => {
    return (
        <article>
            <Link to={ `/${id}` } activeStyle={{ color: 'black' }}>
                <img alt='movie poster' className={isSinglePoster === true ? 'locked-poster' : 'poster'} onClick={() => findPoster(id)} src={image}></img> 
            </Link>
        </article>
    )
}

export default Poster;