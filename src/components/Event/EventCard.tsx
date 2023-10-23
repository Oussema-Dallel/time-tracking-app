import type { AppDispatch } from '../../store/store';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import type { Color } from '../../shared/utils/color/Color';
import { colorToCss } from '../../shared/utils/color/colorToCss';
import { EventDeleteConfirmation } from './EventDeleteConfirmation';
import { EventEditButton } from './EventEditButton';
import { isNotNil } from '../../shared/utils/isNotNil';
import { removeEventAndPushToLocalStorage } from '../../store/effects/removeEventAndPushToLocalStorage';
import { styled } from '@mui/material';
import { useDispatch } from 'react-redux';
import type { UserEvent } from '../../shared/interfaces/UserEvent';
import { type FunctionComponent, type ReactElement, useCallback, useState } from 'react';

interface EventCardProps {
	readonly event: UserEvent;
	readonly handleClickEvent: (event: UserEvent) => void;
}

const CardWithColor = styled(Card)<{ $color?: Color }>`
    background-color: ${({ $color }): string => isNotNil($color) ? colorToCss($color) : 'unset'};
	:hover {
		cursor: pointer;
	}
` as typeof Card;

const EventCard: FunctionComponent<EventCardProps> = ({
	event,
	handleClickEvent: onHandleEventClicked,
}): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();

	const [ isDeleteConfirmationOpen, setIsDeleteConfirmationOpen ] = useState<boolean>(false);

	const handleClickEvent = useCallback(() => {
		onHandleEventClicked(event);
	}, [ onHandleEventClicked, event ]);

	const handleEventDeleteOpened = useCallback(() => {
		setIsDeleteConfirmationOpen(true);
	}, []);

	const onHandleEventDeleteClosed = useCallback(() => {
		setIsDeleteConfirmationOpen(false);
	}, []);

	const onHandleEventDeleted = useCallback((): void => {
		void dispatch(removeEventAndPushToLocalStorage({ id: event.id }));
		onHandleEventDeleteClosed();
	}, [ dispatch, event.id, onHandleEventDeleteClosed ]);

	return (
		<>
			{ /* @ts-expect-error This should work as the $color prop is defined in the CardWithColor component */ }
			<CardWithColor
				$color={ event.color }
				variant='outlined'
			>
				<CardHeader
					title={ event.title }
				/>
				<CardContent
					onClick={ handleClickEvent }
				>
					<p>Start Time: { event.start.toString() }</p>
					<p>End Time: { event.end.toString() }</p>
					<p>Duration: { event.end.toDate().getHours() - event.start.toDate().getHours() } hours</p>
				</CardContent>
				<CardActions>
					<EventEditButton id={ event.id } />
					<Button
						onClick={ handleEventDeleteOpened }
						variant='contained'
					>
						Delete Event
					</Button>
				</CardActions>
			</CardWithColor>
			<EventDeleteConfirmation
				eventTitle={ event.title }
				handleClose={ onHandleEventDeleteClosed }
				handleDelete={ onHandleEventDeleted }
				isOpen={ isDeleteConfirmationOpen }
			/>
		</>
	);
};

export { EventCard };