import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App.js';
import '@testing-library/jest-dom';
import { movieData } from './apiCalls';
jest.mock('./apiCalls.js');

describe('App', () => {
    it('should render correctly', async () => {
      movieData.mockResolvedValueOnce({movies: [
        {
            id: 1,
            poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            title: 'Money Plane',
            average_rating: 6.666666666666667,
            release_date: "2020-09-29",
        }
      ]});
      render(<App />);

      const movieInfo = await waitFor(() => screen.getByAltText('movie poster'));
      const moviesSection = await waitFor(() => screen.getByText('Movies'));

      expect(movieInfo).toBeInTheDocument();
      expect(moviesSection).toBeInTheDocument();
    })
})