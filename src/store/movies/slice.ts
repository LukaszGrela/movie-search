import { createSlice } from "@reduxjs/toolkit";
import { searchMovies } from "./actions";
import { guardIMovieErrorResponse, IMoviesReducer } from "./types";

const initialState: IMoviesReducer = {
  loading: false,
  results: [],
  totalResults: 0,
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(searchMovies.pending, (state, action) => {
      state.loading = true;
      state.error = undefined;
      state.results = [];
    });
    builder.addCase(searchMovies.rejected, (state, action) => {
      state.loading = false;
      state.results = [];
      state.error = action.error.message;
      state.totalResults = 0;
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false;
      if (guardIMovieErrorResponse(action.payload)) {
        state.results = [];
        state.error = action.payload.Error;
        state.totalResults = 0;
      } else {
        state.error = undefined;
        state.results = action.payload.Search;
        state.totalResults = Number(action.payload.totalResults);
      }
    });
  },
});

export default movies.reducer;
