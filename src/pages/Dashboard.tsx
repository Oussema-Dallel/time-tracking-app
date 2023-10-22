import type { AppState } from '../store/store';
import { EventCard } from '../components/Event/EventCard';
import { useSelector } from 'react-redux';
import type { FunctionComponent, ReactElement } from 'react';

const Dashboard: FunctionComponent = (): ReactElement => {
	const events = useSelector((state: AppState) => state.events.events);

	return (
		<>
			<h1>This is the dashboard</h1>
			{ events.map((event) => (
				<EventCard
					color={ event.color }
					endTime={ event.end }
					id={ event.id }
					key={ event.id }
					startTime={ event.start }
					title={ event.title }
				/>
			)) }
		</>
	);
};

export { Dashboard };