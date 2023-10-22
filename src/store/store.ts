import { configureStore as configureReduxStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import type { AppAction, combinedReducers } from './rootReducer';
import type { PreloadedState, Reducer, StoreEnhancer, ThunkDispatch } from '@reduxjs/toolkit';

const configureStore = (
	storeEnhancers: StoreEnhancer[],
	preloadedState?: PreloadedState<AppState>,
// eslint-disable-next-line max-len
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/explicit-module-boundary-types
) => configureReduxStore({
	reducer: rootReducer as Reducer<AppState>,
	preloadedState,
	enhancers: storeEnhancers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({
		serializableCheck: false,
	}),
	devTools: import.meta.env.MODE === 'development',
});

const store = configureStore([]);

type AppStore = ReturnType<typeof configureStore>;
type AppState = ReturnType<typeof combinedReducers>;
type GetState = () => AppState;
type AppDispatch = ThunkDispatch<AppState, undefined, AppAction>;

export type { AppStore, AppState, GetState, AppDispatch };

export { store, configureStore };