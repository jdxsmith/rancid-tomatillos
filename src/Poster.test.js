import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import Poster from './Poster.js'
import '@testing-library/jest-dom'

describe('Poster', () => {
    it('should render correctly', () => {
        const mockFindPoster = jest.fn()
        render(<Poster 
            image={`https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg`}
            id={694919}
            findPoster={mockFindPoster}
        />)

        const moviePoster = screen.getByAltText('movie poster')

        expect(moviePoster).toBeInTheDocument()
    })

    it('should call findPoster when a poster is clicked', () => {
        //setup
        //render a poster with key-value pairs for image, id, and findPoster
        //create a variable to represent each image
        //get all images by using ByAltText
        const mockFindPoster = jest.fn()
        render(<Poster 
            image={`https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg`}
            id={694919}
            findPoster={mockFindPoster}
        />)

        const allPosters = screen.getByAltText('movie poster')

        //execution
        //fireEvent on an image
        fireEvent.click(allPosters)

        //assertion
        //expect findPoster to have been called with an id
        expect(mockFindPoster).toHaveBeenCalledWith(694919)
    })
})