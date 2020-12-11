import React from 'react';
import { fireEvent, render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App.js';
import '@testing-library/jest-dom';
import { movieData , movieDetailsById } from './apiCalls.js';
import { MemoryRouter } from "react-router-dom";
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

    it('should have a Go Back button that returns the user to the home page', async () => {
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

      fireEvent.click(goBackBtn);

      expect(goBackBtn).not.toBeInTheDocument();
    })

    it('should display movie info', async () => {
      movieData.mockResolvedValueOnce({'movies': [
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
      // render(
      //   <MemoryRouter>
      //     <App />
      //   </MemoryRouter>
      // );


      

      
      
      movieDetailsById.mockResolvedValueOnce({"movie": {
        "id": 2,
        "title": "Mulan",
        "poster_path": "https://image.tmdb.org/t/p/original//aKx1ARwG55zZ0GpRvU2WrGrCG9o.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//zzWGRw277MNoCs3zhyG3YmYQsXv.jpg",
        "release_date": "2020-09-04",
        "overview": "When the Emperor of China issues a decree that one man per family must serve in the Imperial Chinese Army to defend the country from Huns, Hua Mulan, the eldest daughter of an honored warrior, steps in to take the place of her ailing father. She is spirited, determined and quick on her feet. Disguised as a man by the name of Hua Jun, she is tested every step of the way and must harness her innermost strength and embrace her true potential.",
        "genres": [
          "Action",
          "Adventure",
          "Drama",
          "Fantasy"
        ],
        "budget": 200000000,
        "revenue": 57000000,
        "runtime": 115,
        "tagline": "",
        "average_rating": 5.2727272727272725
      }})
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );

      const movieInfo = await waitFor(() => screen.getAllByAltText('movie poster'));

      screen.debug;
      // movieInfo.forEach(movie => {
      //   expect(movie).toBeInTheDocument();
      // })

      fireEvent.click(movieInfo[0]);

      const runtime = await waitFor(() => screen.getByText('Runtime'));

      expect(runtime).toBeInTheDocument();
      

      // expect(movieTitle).toBeInTheDocument();
    })
})