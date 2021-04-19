import { createSlice } from "@reduxjs/toolkit";
import { IMoviesReducer } from "./types";

const initialState: IMoviesReducer = {
  loading: false,
  results: [],
};

const movies = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export default movies.reducer;
