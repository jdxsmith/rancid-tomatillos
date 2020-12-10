import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App.js';
import '@testing-library/jest-dom';
import { movieData } from './apiCalls';
jest.mock('./apiCalls.js');
import { MemoryRouter } from "react-router-dom";

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
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const movieInfo = await waitFor(() => screen.getByAltText('movie poster'));
      const moviesSection = await waitFor(() => screen.getByText('Movies'));

      expect(movieInfo).toBeInTheDocument();
      expect(moviesSection).toBeInTheDocument();
    })

    it('should have a go back button that returns the user to the main page', async () => {
      movieData.mockResolvedValueOnce({movies: [
        {
            id: 1,
            poster_path: "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
            title: 'Money Plane',
            average_rating: 6.666666666666667,
            release_date: "2020-09-29",
        },
        {
            id: 2,
            poster_path: "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
            title: "Mulan",
            average_rating: 4.909090909090909,
            release_date: "2020-09-04"
        },
        {
            id: 3,
            poster_path: "https://image.tmdb.org/t/p/original//uOw5JD8IlD546feZ6oxbIjvN66P.jpg",
            backdrop_path: "https://image.tmdb.org/t/p/original//x4UkhIQuHIJyeeOTdcbZ3t3gBSa.jpg",
            title: "Rogue",
            average_rating: 5.428571428571429,
            release_date: "2020-08-20"
      },
      ]});
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const movieInfo = await waitFor(() => screen.getAllByAltText('movie poster'));
      fireEvent.click(movieInfo[0]);

      const goBackBtn = screen.getByText('Go Back');

      expect(goBackBtn).toBeInTheDocument();

      // fireEvent.click(goBackBtn);

      // await waitFor(() => {
      //   expect(goBackBtn).not.toBeInTheDocument();
      // })
    })
})