import type { AppDispatch } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { removeEvent } from '../slices/events';
import { getEventsFromLocalStorage, setEventsInLocalStorage } from '../utils/localStorageUpdates';

const removeEventAndPushToLocalStorage = createAsyncThunk<
void,
{ id: number },
{ dispatch: AppDispatch }
>('events/removeEventAndPushToLocalStorage', async (args, thunkApi) => {
	const {
		dispatch,
	} = thunkApi;
	const {
		id,
	} = args;
	const events = getEventsFromLocalStorage();
	const newEvents = events.filter(event => event.id !== id);

	setEventsInLocalStorage(newEvents);
	dispatch(removeEvent(id));
});

export { removeEventAndPushToLocalStorage };