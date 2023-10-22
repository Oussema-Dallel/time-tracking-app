import type { AppDispatch } from '../../store/store';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { Color } from '../../utils/color/Color';
import { colorToCss } from '../../utils/color/colorToCss';
import { isNotNil } from '../../utils/isNotNil';
import { removeEvent } from '../../store/slices/events';
import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

interface EventCardProps {
	readonly color?: Color;
	readonly endTime: Date;
	readonly id: number;
	readonly startTime: Date;
	readonly title: string;
}

const CardWithColor = styled(Card)<{ $color?: Color }>`
    background-color: ${({ $color }): string => isNotNil($color) ? colorToCss($color) : 'unset'};
`;

const EventCard: FunctionComponent<EventCardProps> = ({
	endTime,
	startTime,
	title,
	color = undefined,
	id,
}): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();

	const handleEventDeleted = useCallback((): void => {
		dispatch(removeEvent(id));
	}, [ dispatch, id ]);

	return (
		<CardWithColor
			$color={ color }
			variant='outlined'
		>
			<CardHeader
				title={ title }
			/>
			<CardContent>
				<p>Start Time: { startTime.toLocaleString('de') }</p>
				<p>End Time: { endTime.toLocaleString('de') }</p>
				<p>Duration: { endTime.getHours() - startTime.getHours() } hours</p>
			</CardContent>
			<CardActions>
				<Button>Edit Event</Button>
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