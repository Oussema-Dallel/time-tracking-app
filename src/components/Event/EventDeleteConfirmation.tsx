import { CustomDialog } from '../../shared/components/CustomDialog';
import { Button, Typography } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';

interface EventDeleteConfirmationProps {
	readonly eventTitle: string;
	readonly handleClose: () => void;
	readonly handleDelete: () => void;
	readonly isOpen: boolean;
}

const EventDeleteConfirmation: FunctionComponent<EventDeleteConfirmationProps> = ({
	eventTitle,
	handleClose: onHandleClose,
	handleDelete,
	isOpen,
}): ReactElement => {
	return (
		<CustomDialog
			actions={
				<>
					<Button
						color="primary"
						onClick={ handleDelete }
						variant='contained'
					>Delete
					</Button>
					<Button
						// eslint-disable-next-line react/jsx-handler-names
						onClick={ onHandleClose }
						variant='outlined'
					>Cancel
					</Button>
				</>
			}
			content={
				<Typography variant='body1'>
					You are about to delete this event, are you sure you want to proceed
				</Typography>
			}
			handleClose={ onHandleClose }
			isOpen={ isOpen }
			title={ `Deleting event: ${eventTitle}` }
		/>
	);
};

export { EventDeleteConfirmation };