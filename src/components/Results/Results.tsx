import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IMoviesReducer } from '../../store/movies/types';
import { Paths } from '../AppRouter/enums';
import MovieReel from '../icons/MovieReel';
import MovieListItem from '../MovieListItem/MovieListItem';
import { TAppState } from '../../store/types';

const ResultsWrapper = styled.div`
  max-width: 56rem;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 1rem;
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

const Loading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
const Oops = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

const Back = styled(Link)`
  display: block;
  margin: 1rem 0;

  :first-child {
    margin-top: 0;
  }

  :hover {
    text-decoration: underline;
  }
`;

const ResultsCounter = styled.p`
  font-size: 0.875rem;
  color: #757575;
  margin: 1rem 0;
`;

const ScrollArea = styled.div`
  height: calc(100vh - 53px - 1rem);

  overflow-y: auto;
`;
const Results: React.FC = (): JSX.Element => {
  const { loading, results, error, totalResults } = useSelector<
    TAppState,
    IMoviesReducer
  >((state) => ({
    loading: state.movies.loading,
    error: state.movies.error,
    results: state.movies.results,
    totalResults: state.movies.totalResults,
  }));
  return (
    <ResultsWrapper>
      {loading && (
        <Loading>
          <div>
            <LoadingMovieReel />
            <h3>Loading movies...</h3>
          </div>
        </Loading>
      )}
      {!loading && error && (
        <Oops>
          <div>
            <NoResultsMovieReel />
            <h1>Oops!</h1>
            <p>{error}</p>
            <Back to={Paths.HOME}>Search for another movie</Back>
          </div>
        </Oops>
      )}
      {!loading && !error && (
        <>
          <div>
            <Back to={Paths.HOME}>Search for another movie</Back>
            <ResultsCounter>{`Found ${totalResults} movies, showing first ${results.length}`}</ResultsCounter>
          </div>
          <ScrollArea>
            <ul>
              {results.map((movie) => {
                return <MovieListItem key={movie.imdbID} data={movie} />;
              })}
            </ul>
          </ScrollArea>
        </>
      )}
    </ResultsWrapper>
  );
};

export default Results;
