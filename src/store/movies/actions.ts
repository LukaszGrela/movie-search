import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMovieErrorResponse, IMovieSearchResponse } from "./types";
import * as API from "../../api";

export const searchMovies = createAsyncThunk<
  IMovieSearchResponse | IMovieErrorResponse,
  string
>(
  "movies/SEARCH",
  async function searchMoviesActionCreator(movieTitle: string, { signal }) {
    const response = await fetch(API.searchMovies(movieTitle), {
      signal,
    }).then((r) => r.json());

    console.log("searchMovies", response);
    return response;
  }
);
