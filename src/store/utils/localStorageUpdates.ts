import dayjs from 'dayjs';
import type { UserEvent } from '../../interfaces/UserEvent';
import { z } from 'zod';

const eventsSchema = z.object({
	id: z.number(),
	title: z.string(),
	description: z.string(),
	start: z.string(),
	end: z.string(),
	color: z.array(z.number()),
}).array();

const setEventsInLocalStorage = (events: UserEvent[]): void => {
	localStorage.setItem('events', JSON.stringify(events));
};

const getEventsFromLocalStorage = (): UserEvent[] => {
	const events = localStorage.getItem('events');

	if (events === null) {
		return [];
	}

	const adjustedEvents = (eventsSchema.parse(JSON.parse(events)) as unknown as UserEvent[]).map((event) => {
		return {
			...event,
			start: dayjs(event.start),
			end: dayjs(event.end),
		};
	});

	return adjustedEvents;
};

export { setEventsInLocalStorage, getEventsFromLocalStorage };