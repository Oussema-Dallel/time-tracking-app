import type { AppDispatch } from '../../store/store';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { Color } from '../../utils/color/Color';
import { colorToCss } from '../../utils/color/colorToCss';
import type { Dayjs } from 'dayjs';
import { EventEditButton } from './EventEditButton';
import { isNotNil } from '../../utils/isNotNil';
import { removeEvent } from '../../store/slices/events';
import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';

interface EventCardProps {
	readonly color?: Color;
	readonly endTime: Dayjs;
	readonly id: number;
	readonly startTime: Dayjs;
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
				<p>Start Time: { startTime.toString() }</p>
				<p>End Time: { endTime.toString() }</p>
				<p>Duration: { endTime.toDate().getHours() - startTime.toDate().getHours() } hours</p>
			</CardContent>
			<CardActions>
				<EventEditButton id={ id } />
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