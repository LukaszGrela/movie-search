export interface IMovieErrorResponse {
  Response: "False";
  Error: string;
}
export const guardIMovieErrorResponse = (
  test: unknown
): test is IMovieErrorResponse => {
  return (
    (test as Object).hasOwnProperty("Response") &&
    (test as any).Response === "False"
  );
};
export interface IMovieSearchResponse {
  totalResults: number;
  Response: "True";
  Search: IMovie[];
}

export interface IMovie {
  Title: string;
  Year?: string;
  Type: "movie" | "series" | "episode" | "game";
  Poster?: string;
  imdbID: string;
}

export interface IMoviesReducer {
  loading: boolean;
  error?: string;
  results: IMovie[];
  totalResults: number;
}
