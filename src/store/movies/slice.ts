import { createSlice } from '@reduxjs/toolkit';
import { searchMovies } from './actions';
import { IMoviesReducer } from './types';

const initialState: IMoviesReducer = {
  loading: false,
  results: [],
  totalResults: 0,
};

export const SLICE_NAME = 'movies' as const;

export const movies = createSlice({
  name: SLICE_NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.results = [];
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = false;
      state.results = [];
      state.error = action.payload?.Error;
      state.totalResults = 0;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false;

      state.error = undefined;
      state.results = action.payload.Search;
      state.totalResults = Number(action.payload.totalResults);
    });
  },
});
