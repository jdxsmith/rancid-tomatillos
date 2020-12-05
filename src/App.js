import React, { Component } from 'react';
import { movieData } from './apiCalls.js';
import Movies from './Movies.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    movieData()
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(err => console.error(err.message))
  }

  findPoster = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id);

    this.setState({ movies: selectedMovie });
  }

  setMovieInfo = () => {
    return(
      <section className='movie-info'>
        <p>{this.state.movies[0].title}</p>
        <p>Average Rating: {this.state.movies[0].average_rating}</p>
        <p>Release Date: {this.state.movies[0].release_date}</p>
        <button onClick={() => window.location.reload()}>Go Back</button>
      </section>
    )
  }

  render() {
    return (
      <section>
        <h1 className='page-title'>Rancid Tomatillos</h1>
        <Movies movies={this.state.movies} findPoster={this.findPoster}/>
        {this.state.movies.length === 1 &&  this.setMovieInfo()}
      </section>
    )
  }
}

export default App;
