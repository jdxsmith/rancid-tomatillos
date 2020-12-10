import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Movies from './Movies.js'
import '@testing-library/jest-dom'
import movieData from './movieData.js'
import { MemoryRouter } from 'react-router-dom'
// import { movieData } from './apiCalls.js';
// jest.mock('./apiCalls');

describe('Movies', () => {
    it('should render correctly', () => {
        const mockFindPoster = jest.fn()
        render(
            <MemoryRouter>
                <Movies 
                    movies={movieData.movies}
                    findPoster={mockFindPoster}
                />
            </MemoryRouter>
        )

        const moviesArray = screen.getAllByAltText('movie poster')

        moviesArray.forEach(movie => {
            expect(movie).toBeInTheDocument()
        })
    })
})