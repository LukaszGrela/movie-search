import React from "react";
import styled from "styled-components";
import { IMovie } from "../../store/movies/types";
import MovieReel from "../icons/MovieReel";

interface IMovieThumbnailProps {
  src: string;
}
const MovieThumbnail = styled.span<IMovieThumbnailProps>`
  display: block;
  width: 4rem;
  height: 5rem;
  padding: 1rem;

  background-image: ${(props) => `url(${props.src})`};
  background-size: cover;
`;
const MovieThumbnailPlaceholder = styled.span`
  display: block;
  width: 4rem;
  height: 5rem;
  padding: 1rem;
  background-color: #d7ccc8;
`;

const MovieListItemWrapper = styled.li`
  height: 5rem;
  display: flex;
  margin: 0.25rem 0;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5rem;
`;

export interface IProps {
  data: IMovie;

  className?: string;
}

const MovieListItem: React.FC<IProps> = ({
  data,
  className,
}: IProps): JSX.Element => {
  return (
    <MovieListItemWrapper className={className}>
      {data.Poster && data.Poster.indexOf("http") === 0 ? (
        <MovieThumbnail
          data-testid="MovieListItem-poster"
          src={data.Poster}
          // alt={`Poster image of the ${movie.Title} movie`}
        />
      ) : (
        <MovieThumbnailPlaceholder>
          <MovieReel />
        </MovieThumbnailPlaceholder>
      )}
      <Details>
        <h2>{data.Title}</h2>
        {data.Year && (
          <span data-testid="MovieListItem-year">({data.Year})</span>
        )}
        <span data-testid="MovieListItem-type">{data.Type}</span>
      </Details>
    </MovieListItemWrapper>
  );
};

export default MovieListItem;
