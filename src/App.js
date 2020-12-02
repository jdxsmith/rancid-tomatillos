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

  render() {
    return (
      <section>
        <h1 className='page-title'>Rancid Tomatillos</h1>
        <Movies movies={this.state.movies}/>
      </section>
    )
  }
}

export default App;
