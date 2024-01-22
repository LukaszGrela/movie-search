import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import MovieReel from '../icons/MovieReel';
import SearchInput from '../SearchInput/SearchInput';
import { Paths } from '../AppRouter/enums';
import { searchMovies } from '../../store/movies/actions';
import { useAppDispatch } from '../../store/hooks';

const StyledHome = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const IconAttributtion = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  color: silver;
  font-size: small;
`;

const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    margin-block-end: 2rem;
  }
  input[type='text'] {
    width: 18rem;
  }
`;

const StyledMovieReel = styled(MovieReel)`
  width: 4rem;
  height: 4rem;

  * {
    fill: #ff5722;
  }
`;

const Home: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [query, setQuery] = React.useState('');

  return (
    <StyledHome>
      <SearchWrapper>
        <StyledMovieReel />
        <h1>Movie Search</h1>
        <SearchInput
          value={query}
          onChange={(value: string): void => {
            setQuery(value);
          }}
          onSubmit={(value: string): void => {
            setQuery(value);
            dispatch(searchMovies(value));
            navigate(Paths.RESULTS);
          }}
        />
      </SearchWrapper>

      <IconAttributtion>
        Icons made by{' '}
        <a href='https://www.freepik.com' title='Freepik'>
          Freepik
        </a>{' '}
        from{' '}
        <a href='https://www.flaticon.com/' title='Flaticon'>
          www.flaticon.com
        </a>
      </IconAttributtion>
    </StyledHome>
  );
};

export default Home;
