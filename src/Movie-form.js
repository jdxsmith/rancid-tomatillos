import React, { Component } from 'react';
import './Movie-form.css'

class MovieForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      unMatchedResult: false
    }
  }

  handleInput = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  filterMovies = (event) => {
    event.preventDefault();
    const filteredMovies = this.props.movies.filter(movie => movie.title.toUpperCase() === this.state.title.toUpperCase());
    // this.props.getFilteredMovies(filteredMovies)
    // this.clearInputs();
    if (filteredMovies.length > 0) {
      this.props.getFilteredMovies(filteredMovies)
      this.clearInputs();
      this.setState({ unMatchedResult: false })
    } else {
      this.setState({ unMatchedResult: true });
    }
  }

  clearInputs = () => {
    this.setState({ title: '' })
  }

  render() {
    return(
      <section className='searched-movies-container'>
        <form className='search-form'>
          <input className='title-search-bar'
            type='text'
            placeholder='Movie'
            name='title'
            value={ this.state.title }
            onChange={ event => this.handleInput(event) }
          />

          <button className='title-search-button' onClick={ event => this.filterMovies(event) }>
            SEARCH 🔍
          </button>
        </form>
        { this.state.unMatchedResult === true && <p className='error-message'>Sorry, no title matches your search. Try searching for another movie.</p> }
      </section>
    )
  }
}

export { MovieForm };