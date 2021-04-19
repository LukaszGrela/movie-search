import { History } from "history";
import { AnyAction, combineReducers, Reducer } from "redux";
import { IMoviesReducer } from "./movies/types";
import movies from "./movies/slice";
export type TAction = AnyAction;
export type TStateObject = {
  movies: IMoviesReducer;
};

export type TRootReducer = Reducer<TStateObject, TAction>;
const createRootReducer = (history: History): TRootReducer =>
  combineReducers<TStateObject, TAction>({
    movies,
  });

export default createRootReducer;
