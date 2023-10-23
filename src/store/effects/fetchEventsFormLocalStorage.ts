import type { AppDispatch } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getEventsFromLocalStorage } from '../utils/localStorageUpdates';
import { setEvents } from '../slices/events';

const fetchEventsFormLocalStorage = createAsyncThunk<void, void, { dispatch: AppDispatch }>(
	'events/fetchEventsFormLocalStorage',
	async (_, thunkApi) => {
		const { dispatch } = thunkApi;
		const events = getEventsFromLocalStorage();

		dispatch(setEvents(events));
	},
);

export { fetchEventsFormLocalStorage };