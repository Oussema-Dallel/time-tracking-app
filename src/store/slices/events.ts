import { createSlice } from '@reduxjs/toolkit';
import dayjs from 'dayjs';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserEvent } from '../../interfaces/UserEvent';

interface EventsState {
	events: UserEvent[];
	toBeEdited: UserEvent | null;
}

const initialState: EventsState = {
	events: [
		{
			id: 1,
			title: 'Test event',
			description: 'This is a test event.',
			start: dayjs('2021-09-01T10:00:00'),
			end: dayjs('2021-09-01T11:00:00'),
			color: [ 255, 0, 0, 50 ],
		},
		{
			id: 2,
			title: 'Test event 2',
			description: 'This is a test event.',
			start: dayjs('2021-09-02T10:00:00'),
			end: dayjs('2021-09-02T11:00:00'),
			color: [ 0, 255, 0, 50 ],
		},
		{
			id: 3,
			title: 'Test event 3',
			description: 'This is a test event.',
			start: dayjs('2021-09-03T10:00:00'),
			end: dayjs('2021-09-03T11:00:00'),
			color: [ 0, 0, 255, 50 ],
		},
	],
	toBeEdited: null,
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
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
} = eventsSlice.actions;

const { reducer } = eventsSlice;

export {
	addEvent,
	editEvent,
	removeEvent,
	setToBeEdited,
};

export default reducer;