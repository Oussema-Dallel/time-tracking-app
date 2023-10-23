import type { AppDispatch } from '../store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { editEvent } from '../slices/events';
import type { UserEvent } from '../../interfaces/UserEvent';
import { getEventsFromLocalStorage, setEventsInLocalStorage } from '../utils/localStorageUpdates';

const editEventAndPushToLocalStorage = createAsyncThunk<
void,
{ event: UserEvent },
{ dispatch: AppDispatch }
>('events/editEventAndPushToLocalStorage', async (args, thunkApi) => {
	const { dispatch } = thunkApi;
	const { event } = args;
	const events = getEventsFromLocalStorage();
	// eslint-disable-next-line @typescript-eslint/naming-convention
	const index = events.findIndex((event_) => event_.id === event.id);
	const newEvents = [
		...events.slice(0, index),
		event,
		...events.slice(index + 1),
	];

	setEventsInLocalStorage(newEvents);

	dispatch(editEvent(event));
});

export { editEventAndPushToLocalStorage };