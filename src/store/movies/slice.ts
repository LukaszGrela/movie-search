import { createSlice } from "@reduxjs/toolkit";
import { searchMovies } from "./actions";
import { guardIMovieErrorResponse, IMoviesReducer } from "./types";

const initialState: IMoviesReducer = {
  loading: false,
  results: [],
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
    });
    builder.addCase(searchMovies.fulfilled, (state, action) => {
      state.loading = false;
      if (guardIMovieErrorResponse(action.payload)) {
        state.results = [];
        state.error = action.payload.Error;
      } else {
        state.error = undefined;
        state.results = action.payload.Search;
      }
    });
  },
});

export default movies.reducer;
