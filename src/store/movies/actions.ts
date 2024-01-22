import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  IMovieErrorResponse,
  IMovieSearchResponse,
  guardIMovieErrorResponse,
} from './types';
import * as API from '../../api';

export const searchMovies = createAsyncThunk<
  IMovieSearchResponse,
  string,
  { rejectValue: IMovieErrorResponse }
>(
  'movies/SEARCH',
  async function searchMoviesActionCreator(movieTitle: string, thunkAPI) {
    try {
      const response = await fetch(API.searchMovies(movieTitle));

      const data = (await response.json()) as IMovieSearchResponse;

      if (data.Response !== 'True') {
        throw data as unknown as IMovieErrorResponse;
      }

      return data;
    } catch (error) {
      if (guardIMovieErrorResponse(error)) {
        return thunkAPI.rejectWithValue(error);
      } else {
        return thunkAPI.rejectWithValue({
          Response: 'False',
          Error: (error as Error).message,
        });
      }
    }
  }
);

export type TActionTypes =
  | typeof searchMovies.pending
  | typeof searchMovies.rejected
  | typeof searchMovies.fulfilled;
