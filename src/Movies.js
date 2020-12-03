import React from 'react';
import Poster from './Poster';
import './Movies.css';

const Movies = ({movies, findPoster}) => {
// const { movies } = props;

    const moviePosters = movies.map(movie => {
        return (
            <Poster 
                image={movie.poster_path}
                id={movie.id}
                key={movie.id}
                findPoster={findPoster}
            />

        )
    })

    return (
        <section>
            <h2 className='movies-section-title'>Movies</h2>
            <article className='movie-posters-container'>
                {moviePosters}
            </article>
        </section>
    )
}

export default Movies;