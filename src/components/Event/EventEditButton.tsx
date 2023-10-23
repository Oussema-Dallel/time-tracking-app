import { Button } from '@mui/material';
import { EventFormDialog } from './EventFormDialog';
import { isNotNil } from '../../shared/utils/isNotNil';
import { setToBeEdited } from '../../store/slices/events';
import type { AppDispatch, AppState } from '../../store/store';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface EventEditButtonProps {
	readonly id: number;
}

const EventEditButton: FunctionComponent<EventEditButtonProps> = ({ id }): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();
	const toBeEdited = useSelector((state: AppState) => state.events.toBeEdited);
	const onHandleClosed = useCallback(() => {
		dispatch(setToBeEdited(null));
	}, [ dispatch ]);
	const handleOpenEventFormDialog = useCallback(() => {
		dispatch(setToBeEdited(id));
	}, [ dispatch, id ]);

	return (
		<>
			<Button
				color="primary"
				onClick={ handleOpenEventFormDialog }
				variant="contained"
			>
				Edit
			</Button>
			<EventFormDialog
				contextTitle='Edit Event'
				handleClose={ onHandleClosed }
				isOpen={ isNotNil(toBeEdited) }
			/>
		</>
	);
};

export { EventEditButton };