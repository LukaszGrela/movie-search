import { createBrowserHistory } from "history";
import { applyMiddleware, createStore, Store } from "redux";
import { composeWithDevTools, EnhancerOptions } from "redux-devtools-extension";
import thunk, { ThunkDispatch } from "redux-thunk";
import createRootReducer, { TAction, TStateObject } from "./createRootReducer";

const history = createBrowserHistory();

const middleware = [thunk];

const enhancers: never[] = [];

const composeEnhancers = composeWithDevTools({} as EnhancerOptions);

type TDispatch = ThunkDispatch<TStateObject, unknown, TAction>;
type TStore = Store<TStateObject, TAction> & {
  dispatch: TDispatch;
};
const store: TStore = createStore(
  createRootReducer(history),
  composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

export { history };
export type { TStore, TDispatch };
export default store;
