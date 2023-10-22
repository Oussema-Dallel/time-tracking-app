import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { FunctionComponent, ReactElement } from 'react';

interface EventCardProps {
	readonly endTime: Date;
	readonly startTime: Date;
	readonly title: string;
}

const EventCard: FunctionComponent<EventCardProps> = ({
	endTime,
	startTime,
	title,
}): ReactElement => {
	return (
		<Card
			component="article"
			variant='outlined'
		>
			<CardHeader
				component="header"
				title={ title }
			/>
			<CardContent>
				<p>Start Time: { startTime.toLocaleString('de') }</p>
				<p>End Time: { endTime.toLocaleString('de') }</p>
				<p>Duration: { endTime.getHours() - startTime.getHours() } hours</p>
			</CardContent>
			<CardActions>
				<Button>Edit Event</Button>
				<Button variant='contained'>Delete Event</Button>
			</CardActions>
		</Card>
	);
};

export { EventCard };