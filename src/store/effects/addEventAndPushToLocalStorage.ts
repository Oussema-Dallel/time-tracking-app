import { addEvent } from '../slices/events';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { setEventsInLocalStorage } from '../utils/localStorageUpdates';
import type { UserEvent } from '../../interfaces/UserEvent';
import type { AppDispatch, AppState } from '../store';

const addEventAndPushToLocalStorage = createAsyncThunk<
void,
{ event: Omit<UserEvent, 'id'> },
{ dispatch: AppDispatch; state: AppState }
>('events/addEventAndPushToLocalStorage', async (args, thunkApi) => {
	const {
		dispatch,
		getState,
	} = thunkApi;
	const { event } = args;

	dispatch(addEvent(event));

	setEventsInLocalStorage(getState().events.events);
});

export {
	addEventAndPushToLocalStorage,
};