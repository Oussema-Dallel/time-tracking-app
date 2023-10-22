import { Button } from '@mui/material';
import { EventFormDialog } from './EventFormDialog';
import { type FunctionComponent, type ReactElement, useCallback, useState } from 'react';

const AddEventButton: FunctionComponent = (): ReactElement => {
	const [ isOpen, setIsOpen ] = useState(false);
	const onHandleCloseEventFormDialog = useCallback(() => {
		setIsOpen(false);
	}, [ ]);
	const handleOpenEventFormDialog = useCallback(() => {
		setIsOpen(true);
	}, [ ]);

	return (
		<>
			<Button
				color="primary"
				onClick={ handleOpenEventFormDialog }
				variant="contained"
			>
				Add event
			</Button>
			<EventFormDialog
				contextTitle='Add Event'
				handleClose={ onHandleCloseEventFormDialog }
				isOpen={ isOpen }
			/>
		</>
	);
};

export { AddEventButton };