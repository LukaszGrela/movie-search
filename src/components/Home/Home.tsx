import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { searchMovies } from "../../store/movies/actions";

const StyledHome = styled.div``;

const Home: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  dispatch(searchMovies("wind"));

  return <StyledHome>Movie Search</StyledHome>;
};

export default Home;
