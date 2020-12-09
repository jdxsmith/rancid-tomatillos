import React from 'react';
import './Poster.css';
import { Link } from 'react-router-dom';

const Poster = ({image, id, findPoster, isSinglePoster}) => {
    return (
        <article>
            <Link to={ `/${id}` }>
                <img 
                    alt='movie poster' 
                    className={isSinglePoster === true ? 'locked-poster' : 'poster'} 
                    // onClick={() => findPoster(id)} 
                    src={image}
                />
            </Link>
        </article>
    )
}

export default Poster;