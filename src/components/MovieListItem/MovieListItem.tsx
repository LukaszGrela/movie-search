import React from "react";
import styled from "styled-components";
import { IMovie } from "../../store/movies/types";

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

export interface IProps {
  data: IMovie;

  className?: string;
}

const MovieListItem: React.FC<IProps> = ({
  data,
  className,
}: IProps): JSX.Element => {
  return (
    <li className={className}>
      <span>{data.Title}</span>
      <span>{data.Type}</span>
      {data.Year && <span>{data.Year}</span>}
      {data.Poster && (
        <MovieThumbnail
          src={data.Poster}
          // alt={`Poster image of the ${movie.Title} movie`}
        />
      )}
    </li>
  );
};

export default MovieListItem;
