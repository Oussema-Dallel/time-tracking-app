import type { AppState } from './store';
import { combineReducers } from '@reduxjs/toolkit';

const combinedReducers = combineReducers({
	// ...reducers
});

type CombinedReducerAction = Parameters<typeof combinedReducers>[1];
type AppAction = CombinedReducerAction;

const rootReducer = (state: AppState, action: AppAction): AppState => {
	return combinedReducers(state, action);
};

export default rootReducer;
export type { AppAction };
export { combinedReducers };