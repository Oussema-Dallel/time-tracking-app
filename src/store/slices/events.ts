import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserEvent } from '../../interfaces/UserEvent';

interface EventsState {
	events: UserEvent[];
	toBeEdited: UserEvent | null;
}

const initialState: EventsState = {
	events: [],
	toBeEdited: null,
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setEvents: (state, action: PayloadAction<UserEvent[]>) => {
			return {
				...state,
				events: action.payload,
			};
		},
		addEvent (state, action: PayloadAction<Omit<UserEvent, 'id'>>) {
			return {
				...state,
				events: [
					...state.events,
					{
						...action.payload,
						id: state.events.length + 1,
					},
				],
			};
		},
		editEvent (state, action: PayloadAction<UserEvent>) {
			const { events } = state;
			const { id } = action.payload;
			const index = events.findIndex((event) => event.id === id);

			return {
				...state,
				events: [
					...events.slice(0, index),
					action.payload,
					...events.slice(index + 1),
				],
			};
		},
		setToBeEdited (state, action: PayloadAction<number | null>) {
			return {
				...state,
				toBeEdited: action.payload === null
					? null
					: state.events.find((event) => event.id === action.payload) ?? null,
			};
		},
		removeEvent (state, action: PayloadAction<number>) {
			const { events } = state;
			const index = events.findIndex((event) => event.id === action.payload);

			return {
				...state,
				events: [
					...events.slice(0, index),
					...events.slice(index + 1),
				],
			};
		},
	},
});

const {
	addEvent,
	editEvent,
	removeEvent,
	setToBeEdited,
	setEvents,
} = eventsSlice.actions;

const { reducer } = eventsSlice;

export {
	addEvent,
	editEvent,
	removeEvent,
	setToBeEdited,
	setEvents,
};

export default reducer;