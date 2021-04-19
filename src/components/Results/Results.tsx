import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { TStateObject } from "../../store/createRootReducer";
import { IMoviesReducer } from "../../store/movies/types";
import MovieReel from "../icons/MovieReel";

const ResultsWrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
`;

const LoadingMovieReel = styled(MovieReel)`
width: 3rem;
height 3rem;

path#movie-reel-wheel{
  fill: #5D4037;
  transform-box: view-box;
  animation: spin 3s infinite;
  transform-origin: 50% 50%;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
}
`;
const NoResultsMovieReel = styled(MovieReel)`
width: 4rem;
height 4rem;

path#movie-reel-wheel{
  fill: #5D4037; 
}
`;
interface IMovieThumbnailProps {
  src: string;
}
const MovieThumbnail = styled.span<IMovieThumbnailProps>`
  display: block;
  width: 4rem;
  height: 4rem;
  margin: 1rem;

  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;
const Results: React.FC = (): JSX.Element => {
  const { loading, results, error } = useSelector<TStateObject, IMoviesReducer>(
    (state) => ({
      loading: state.movies.loading,
      error: state.movies.error,
      results: state.movies.results,
    })
  );
  return (
    <ResultsWrapper>
      {loading && <LoadingMovieReel />}
      {!loading && error && (
        <div>
          <NoResultsMovieReel />
          <h1>Oops!</h1>
          <p>{error}</p>
        </div>
      )}
      {!loading && !error && (
        <ul>
          {results.map((movie) => {
            return (
              <li key={movie.imdbID}>
                <span>{movie.Title}</span>
                <span>{movie.Type}</span>
                {movie.Year && <span>{movie.Year}</span>}
                {movie.Poster && (
                  <MovieThumbnail
                    src={movie.Poster}
                    // alt={`Poster image of the ${movie.Title} movie`}
                  />
                )}
              </li>
            );
          })}
        </ul>
      )}
    </ResultsWrapper>
  );
};

export default Results;
