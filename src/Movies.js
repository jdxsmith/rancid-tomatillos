import React from 'react';
import Poster from './Poster';
import './Movies.css';

const Movies = ({movies, movieDetails, isSinglePoster}) => {
    const singleMovieDetails = movieDetails;
    const moviePosters = movies.map(movie => {
        return (
            <Poster
                image={movie.poster_path}
                aria-label='movie'
                id={movie.id}
                key={movie.id}
                isSinglePoster={isSinglePoster}
            />
        )
    })

    return (
        <section>
            <h2 className='movies-section-title'>Movies</h2>
            <article data-testid='movies-container' className={movies.length === 1 ? 'single-poster' : 'movie-posters-container'}>
                {moviePosters}
            </article>
            { movies && singleMovieDetails }
        </section>
    )
}

export default Movies;