import type { AppDispatch } from '../../store/store';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { Color } from '../../utils/color/Color';
import { colorToCss } from '../../utils/color/colorToCss';
import { EventEditButton } from './EventEditButton';
import { isNotNil } from '../../utils/isNotNil';
import { removeEvent } from '../../store/slices/events';
import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import type { UserEvent } from '../../interfaces/UserEvent';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

interface EventCardProps {
	readonly event: UserEvent;
	readonly handleClickEvent: (event: UserEvent) => void;
}

const CardWithColor = styled(Card)<{ $color?: Color }>`
    background-color: ${({ $color }): string => isNotNil($color) ? colorToCss($color) : 'unset'};
`;

const EventCard: FunctionComponent<EventCardProps> = ({
	event,
	handleClickEvent: onHandleEventClicked,
}): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();

	const handleEventDeleted = useCallback((): void => {
		dispatch(removeEvent(event.id));
	}, [ dispatch, event.id ]);

	const handleClickEvent = useCallback(() => {
		onHandleEventClicked(event);
	}, [ onHandleEventClicked, event ]);

	return (
		<CardWithColor
			$color={ event.color }
			onClick={ handleClickEvent }
			variant='outlined'
		>
			<CardHeader
				title={ event.title }
			/>
			<CardContent>
				<p>Start Time: { event.start.toString() }</p>
				<p>End Time: { event.end.toString() }</p>
				<p>Duration: { event.end.toDate().getHours() - event.start.toDate().getHours() } hours</p>
			</CardContent>
			<CardActions>
				<EventEditButton id={ event.id } />
				<Button
					onClick={ handleEventDeleted }
					variant='contained'
				>
					Delete Event
				</Button>
			</CardActions>
		</CardWithColor>
	);
};

export { EventCard };