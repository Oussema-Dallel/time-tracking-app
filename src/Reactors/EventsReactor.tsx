import type { AppDispatch } from '../store/store';
import { fetchEventsFormLocalStorage } from '../store/effects/fetchEventsFormLocalStorage';
import type { FunctionComponent } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const EventsReactor: FunctionComponent = (): null => {
	const dispatch = useDispatch<AppDispatch>();

	useEffect(() => {
		void dispatch(fetchEventsFormLocalStorage());
	}, [ dispatch ]);

	return null;
};

export { EventsReactor };