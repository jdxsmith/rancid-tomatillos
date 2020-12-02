import React from 'react';
import Poster from './Poster';

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
            {moviePosters}
        </section>
    )
}

export default Movies;