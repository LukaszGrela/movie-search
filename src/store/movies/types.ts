export interface IMovieErrorResponse {
  Response: "True" | "False";
  Error: string;
}

export interface IMovieSearchResponse {
  totalResults: number;
  Response: "True" | "False";
  Search: IMovie[];
}

export interface IMovie {
  Title: string;
  Year?: string;
  Type: "movie" | "series" | "episode";
  Poster?: string;
  imdbID: string;
}

export interface IMoviesReducer {
  loading: boolean;
  results: IMovie[];
}
