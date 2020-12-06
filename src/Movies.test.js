import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Movies from './Movies.js'
import '@testing-library/jest-dom'
import movieData from './movieData.js'
// import { movieData } from './apiCalls.js';
// jest.mock('./apiCalls');

describe('Movies', () => {
    it('should render correctly', () => {
        const mockFindPoster = jest.fn()
        render(<Movies 
            movies={movieData.movies}
            findPoster={mockFindPoster}
        />)

        const moviesArray = screen.getAllByAltText('movie poster')

        moviesArray.forEach(movie => {
            expect(movie).toBeInTheDocument()
        })
    })
})