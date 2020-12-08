import React, { Component } from 'react';
import { movieData } from './apiCalls.js';
import Movies from './Movies.js';
import './App.css';
import {Route} from 'react-router-dom';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      isSinglePoster: false,
    }
  }

  componentDidMount() {
    movieData()
    .then(movies => this.setState({ movies: movies.movies }))
    .catch(error => console.log(error))
  }

  findPoster = (id) => {
    const selectedMovie = this.state.movies.filter(movie => movie.id === id);

    this.setState({ movies: selectedMovie, isSinglePoster: true });
  }

  setMovieInfo = () => {
    return(
      <section className='movie-info'>
        <p>{this.state.movies[0].title}</p>
        <p>Average Rating: {this.state.movies[0].average_rating.toFixed(1)}</p>
        <p>Release Date: {this.state.movies[0].release_date}</p>
        <button className='go-back-btn' onClick={() => window.location.reload()}>Go Back</button>
      </section>
    )
  }

  render() {
    return (
      <section>
        <h1 className='page-title'>Rancid Tomatillos</h1>
        <Route exact path='/' render={ () => <Movies movies={this.state.movies} findPoster={this.findPoster} isSinglePoster={this.state.isSinglePoster}/> }/>
        <Route 
          exact
          path='/:id'
          render={({ match }) => {
            const poster = this.state.movies.find(movie => movie.id === parseInt(match.params.id));
            
            if (!poster) {
              return <div>Sorry, no poster found with that id!</div>
            }
            
            return <Movies movies={this.state.movies} findPoster={this.findPoster} isSinglePoster={this.state.isSinglePoster} />
          }}
          />
          {this.state.movies.length === 1 && this.setMovieInfo()}
      </section>
    )
  }
}

export default App;
