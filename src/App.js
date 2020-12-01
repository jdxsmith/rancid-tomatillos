import React, { Component } from 'react';
import movieData from './movieData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: movieData.movies,
    }
  }

  render() {
    return (
      <h1>Rancid Tomatillos</h1>
    )
  }
}

export default App;
