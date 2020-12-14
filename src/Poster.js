import React, { useState, useEffect } from 'react';
import './Poster.css';
import { movieDetailsById } from './apiCalls.js';
import { Link } from 'react-router-dom';

const Poster = ({ image, id, isSinglePoster }) => {
    // Updateing app state here causes an infinite re-render
    // EXPERIMENTAL HOOKS (Allows us to use some state in our functional component) 👇
    //   * Otherwise we would want to use a class component
    // --------------------------------------------------------------------------------
    const [selectedMovie, setSelectedMovie] = useState({})
    // piece of state, and method to set state (useState, initial value of our state)
    // useEffect runs and allows us to get our state
    useEffect(() => {
        if (!Object.keys(selectedMovie).length) {
            getSelectedMovie();
        }
    })
    // function we used to use our API call (Customized by us... not imported from react)
    const getSelectedMovie = async () => {
        const movieDetails = await movieDetailsById(id);
        setSelectedMovie(movieDetails)
    }
    // ----------------------------------------------------------------------------------
    
    const setMovieInfo = () => {
        window.scrollTo(0, 0);
        const currentMovie = selectedMovie.movie;
        
        return(
            <section className='movie-info movie-info-background'>
                { (currentMovie &&  Object.keys(currentMovie).length) && 
                    <React.Fragment>
                        <p>{ currentMovie.title }</p>
                        <p>Average Rating: { currentMovie.average_rating.toFixed(1) }</p>
                        <p>Release Date: { currentMovie.release_date }</p>
                        <p>Overview: { currentMovie.overview }</p>
                        <p>Genre(s): { currentMovie.genres.map((genre, i) => {
                            const genreLenth = currentMovie.genres.length
                            if (genreLenth === i + 1) {
                                return `and ${genre}`
                            } else {
                                return `${genre}, `
                            }
                        })
                        }</p>
                        <p>Runtime: { currentMovie.runtime } minutes</p>
                        <Link to='/'>
                            <button className='go-back-btn' to='/'>Go Back</button>
                        </Link>    
                    </React.Fragment>
                }
            </section>
        )
    }

    return (
        <article className='movie-info'>
            <Link to={ `/${id}` }>
                <img 
                    alt='movie poster' 
                    className={ isSinglePoster === true ? 'locked-poster' : 'poster' } 
                    src={ image }
                />
            </Link>
            { isSinglePoster === true && setMovieInfo() }
        </article>
    )
}

export { Poster };