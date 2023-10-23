import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AddEventButton } from '../components/Event/AddEventButton';
import type { AppState } from '../store/store';
import { EventCard } from '../components/Event/EventCard';
import { EventDetails } from '../components/Event/EventDetails/EventDetails';
import { isNotNil } from '../shared/utils/isNotNil';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { styled } from '@mui/material';
import type { UserEvent } from '../shared/interfaces/UserEvent';
import { useSelector } from 'react-redux';
import { type FunctionComponent, type ReactElement, useCallback, useState } from 'react';

const Events = styled('div')`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Dashboard: FunctionComponent = (): ReactElement => {
	const events = useSelector((state: AppState) => state.events.events);
	const [ selectedEvent, setSelectedEvent ] = useState<UserEvent | null>(null);
	const onHandleEventSelected = useCallback((event: UserEvent) => {
		setSelectedEvent(event);
	}, []);

	const onHandleCloseEventDetails = useCallback(() => {
		setSelectedEvent(null);
	}, []);

	return (
		<LocalizationProvider dateAdapter={ AdapterDayjs }>
			<h1>Events Dashboard</h1>
			<AddEventButton />
			<Events>
				{ events.map((event) => (
					<EventCard
						event={ event }
						handleClickEvent={ onHandleEventSelected }
						key={ event.id }
					/>
				)) }
			</Events>
			{ isNotNil(selectedEvent)
				? (
					<EventDetails
						event={ selectedEvent }
						handleClose={ onHandleCloseEventDetails }
						isOpen={ isNotNil(selectedEvent) }
					/>
				)
				: null }
		</LocalizationProvider>
	);
};

export { Dashboard };