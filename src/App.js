import React, { Component } from 'react';
import { movieData } from './apiCalls.js';
import Movies from './Movies.js';
import Poster from './Poster.js';
import './App.css';
import {Route, Switch, Link} from 'react-router-dom';

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

  setMovieInfo = () => {
    return(
      <section className='movie-info'>
        <p>{this.state.movies[0].title}</p>
        <p>Average Rating: {this.state.movies[0].average_rating.toFixed(1)}</p>
        <p>Release Date: {this.state.movies[0].release_date}</p>
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
              const poster = this.state.movies.filter(movie => movie.id === parseInt(match.params.id));
              console.log(poster);
              this.state.isSinglePoster = true;
              
              if (poster.length > 0) {
                const test = this.setMovieInfo();
                return <Movies
                  movies={poster} 
                  aMovie={test} 
                  isSinglePoster={this.state.isSinglePoster} 
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
//  if (poster) {
//                 const test = this.setMovieInfo();
//                 return <Poster 
//                   image={poster.poster_path}
//                   id={poster.id}
//                   isSinglePoster={true}