import { EventCard } from '../components/Event/EventCard';
import type { FunctionComponent, ReactElement } from 'react';

const Dashboard: FunctionComponent = (): ReactElement => {
	return (
		<>
			<h1>This is the dashboard</h1>
			<EventCard
				endTime={ new Date(2023, 10, 22, 13, 15) }
				startTime={ new Date(new Date(2023, 10, 22, 12, 15)) }
				title='Very Important!'
			/>
		</>
	);
};

export { Dashboard };