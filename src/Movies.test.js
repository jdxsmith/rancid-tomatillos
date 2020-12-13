import React from 'react'
import { render, screen } from '@testing-library/react'
import Movies from './Movies.js'
import '@testing-library/jest-dom'
import movieData from './movieData.js'
import { MemoryRouter } from 'react-router-dom'

describe('Movies', () => {
    it('should render correctly', () => {
        render(
            <MemoryRouter>
                <Movies 
                    movies={movieData.movies}
                />
            </MemoryRouter>
        )

        const moviesArray = screen.getAllByAltText('movie poster')

        moviesArray.forEach(movie => {
            expect(movie).toBeInTheDocument()
        })
    })
})