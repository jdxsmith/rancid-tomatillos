import React, { Component } from 'react';
import './Movie-form.css'

class MovieForm extends Component {
  constructor() {
    super();
    this.state = {
      genre: '',
    }
  }

  render() {
    return(
      <form className='search-form'>
        <input className='genre-search-bar'
          type='text'
          placeholder='Genre'
          name='search-by-genre'
          value={this.state.genre}
          // onChange={methodGoesHere}
        />

        <button className='genre-search-button'>
          SEARCH 🔍
        </button>
      </form>
    )
  }
}

export {MovieForm};