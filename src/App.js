import React, { Component } from 'react';
import { movieData, movieDetailsById } from './apiCalls.js';
import Movies from './Movies.js';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';
import { MovieForm } from './Movie-form.js';

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
    // debugger
    this.setState({
      selectedMovie: movieDetails,
    })
  }

  getFilteredMovies = (moviesToFilter) => {
    this.setState({movies: moviesToFilter});
  }

  render() {
    return (
      <section>
        <h1 className='page-title'>Rancid Tomatillos</h1>
        <Switch>
          <Route 
            exact 
            path='/' 
            render={ () => { 
              return (
              <section>
                <MovieForm 
                  movies={this.state.movies}
                  getFilteredMovies={this.getFilteredMovies}  
                />
                <Movies 
                  movies={this.state.movies} 
                  findPoster={this.findPoster} 
                  isSinglePoster={this.state.isSinglePoster}/> 
              </section>
              )
            }
          }
          />
          <Route 
            exact
            path='/:id'
            render={({ match }) => {
              const id = parseInt(match.params.id);
              const poster = this.state.movies.filter(movie => movie.id === parseInt(match.params.id));
              if (poster.length > 0) {
                return <Movies
                  movies={poster} 
                  isSinglePoster={true} 
                  movieId={id}
                  selectedMovie={this.state.selectedMovie}
                  syncMovieId={this.singleMovieFetch}
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
