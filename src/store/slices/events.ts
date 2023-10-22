import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { UserEvent } from '../../interfaces/UserEvent';

interface EventsState {
	events: UserEvent[];
}

const initialState: EventsState = {
	events: [
		{
			id: 1,
			title: 'Test event',
			description: 'This is a test event.',
			start: new Date('2021-09-01T10:00:00'),
			end: new Date('2021-09-01T11:00:00'),
			color: [ 255, 0, 0, 50 ],
		},
		{
			id: 2,
			title: 'Test event 2',
			description: 'This is a test event.',
			start: new Date('2021-09-02T10:00:00'),
			end: new Date('2021-09-02T11:00:00'),
			color: [ 0, 255, 0, 50 ],
		},
		{
			id: 3,
			title: 'Test event 3',
			description: 'This is a test event.',
			start: new Date('2021-09-03T10:00:00'),
			end: new Date('2021-09-03T11:00:00'),
			color: [ 0, 0, 255, 50 ],
		},
	],
};

const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		addEvent (state, action: PayloadAction<UserEvent>) {
			state.events.push(action.payload);
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
} = eventsSlice.actions;

const { reducer } = eventsSlice;

export {
	addEvent,
	editEvent,
	removeEvent,
};

export default reducer;