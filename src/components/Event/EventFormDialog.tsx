import { CustomDialog } from '../../shared/components/CustomDialog';
import type { CustomDialogProps } from '../../shared/components/CustomDialog';
import { EventForm } from './EventForm';
import { type FunctionComponent, type ReactElement } from 'react';

interface EventFormDialogProps extends Omit<CustomDialogProps, 'actions' | 'content' | 'title'> {
	readonly contextTitle: 'Add Event' | 'Edit Event';
}

const EventFormDialog: FunctionComponent<EventFormDialogProps> = ({
	handleClose: onHandleClosed,
	isOpen,
	contextTitle,
}): ReactElement => {
	return (
		<CustomDialog
			content={ <EventForm handleClose={ onHandleClosed } /> }
			handleClose={ onHandleClosed }
			isOpen={ isOpen }
			title={ contextTitle }
		/>
	);
};

export { EventFormDialog };