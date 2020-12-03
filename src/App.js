import React, { Component } from 'react';
import movieData from './movieData';
import Movies from './Movies';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    }
  }

  findPoster = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id);

    this.setState({ movies: selectedMovie });
  }

  render() {
    return (
      <section>
        <h1 className='page-title'>Rancid Tomatillos</h1>
        <Movies movies={this.state.movies} findPoster={this.findPoster}/>
        {this.state.movies.length === 1 && <section><p>{this.state.movies[0].title}</p><p>Average Rating: {this.state.movies[0].average_rating}</p><p>Release Date: {this.state.movies[0].release_date}</p></section>}
      </section>
    )
  }
}

export default App;
