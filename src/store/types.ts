import { ThunkDispatch } from 'redux-thunk';
import { Action, Store } from 'redux';
import rootReducer from './rootReducer';

export type TAppState = ReturnType<typeof rootReducer>;

export type TDispatch = ThunkDispatch<TAppState, unknown, Action>;

export type TStore = Store<TAppState, Action> & { dispatch: TDispatch };
