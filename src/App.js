import React, { Component } from 'react';
import { movieData, movieDetailsById } from './apiCalls.js';
import Movies from './Movies.js';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: {},
      isSinglePoster: false,
    }
  }

  componentDidMount = async () => {
    await movieData()
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => console.log(error))
  }

  singleMovieFetch = async (id) => {
    const movieDetails = await movieDetailsById(id);
    this.setState({
      selectedMovie: movieDetails,
    })
  }

  setMovieInfo = () => {
    const currentMovie = this.state.selectedMovie.movie;
    return(
        <section className='movie-info'>
          {currentMovie !== undefined && <p>{currentMovie.title}</p>}
          {currentMovie !== undefined && this.state.selectedMovie.movie.tagline.length > 0 && <p>{currentMovie.tagline}</p>}
          {currentMovie !== undefined && <p>Average Rating: {currentMovie.average_rating.toFixed(1)}</p>}
          {currentMovie !== undefined && <p>Release Date: {currentMovie.release_date}</p>}
          {currentMovie !== undefined && <p>Overview: {currentMovie.overview}</p>}
          {currentMovie !== undefined && <p>Genre(s): {currentMovie.genres.map(genre => `${genre}, `)}</p>}
          {currentMovie !== undefined && <p>Runtime: {currentMovie.runtime} minutes</p>}
          <Link to='/'>
            <button className='go-back-btn' to='/'>Go Back</button>
          </Link>
        </section>
    )
  }

  render() {
    return (
      <section>
        <h1 className='page-title'>Rancid Tomatillos</h1>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={ () => <Movies movies={this.state.movies} 
            findPoster={this.findPoster} 
            isSinglePoster={this.state.isSinglePoster}/> 
          }
          />
          <Route 
            exact
            path='/:id'
            render={({ match }) => {
              const id = parseInt(match.params.id);
              this.state.selectedMovie.id !== Number(id) && this.singleMovieFetch(id);
              const poster = this.state.movies.filter(movie => movie.id === parseInt(match.params.id));
              // this.state.isSinglePoster = true;
              
              if (poster.length > 0) {
                const selectedMovieInfo = this.setMovieInfo();
                return <Movies
                  movies={poster} 
                  movieDetails={selectedMovieInfo} 
                  isSinglePoster={true} 
                  // selectedMovie={this.state.selectedMovie}
                />
              } else {
                return (
                <div>
                  <div>Sorry, no poster found with that id!</div>
                  <Link to='/'>
                    <button className='go-back-btn' to='/'>Go Back</button>
                  </Link>
                </div>
                )
              }
            }}
            />
          </Switch>
      </section>
    )
  }
}

export default App;
