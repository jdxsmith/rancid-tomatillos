import React from 'react';
import Poster from './Poster';
import './Movies.css';

const Movies = (props) => {
const { movies } = props;

    const moviePosters = movies.map(movie => {
        return (
            <Poster 
                image={movie.poster_path}
            />
        )
    })

    return (
        <section>
            <h2>Movies</h2>
            <article className='movie-posters-container'>
                {moviePosters}
            </article>
        </section>
    )
}

export default Movies;