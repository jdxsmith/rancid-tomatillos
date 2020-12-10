import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Poster from './Poster.js'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'

describe('Poster', () => {
    it('should render correctly', () => {
        render(
        <MemoryRouter>
            <Poster 
                image={`https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg`}
                id={694919}
            />
        </MemoryRouter>
        )

        const moviePoster = screen.getByAltText('movie poster')

        expect(moviePoster).toBeInTheDocument()
    })
})