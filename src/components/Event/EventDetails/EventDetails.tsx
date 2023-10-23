import { CustomDialog } from '../../../shared/components/CustomDialog';
import type { CustomDialogProps } from '../../../shared/components/CustomDialog';
import { EventDetailsContent } from './EventDetailsContent';
import { EventEditButton } from '../EventEditButton';
import type { UserEvent } from '../../../shared/interfaces/UserEvent';
import type { FunctionComponent, ReactElement } from 'react';

interface EventDetailsProps extends Omit<CustomDialogProps, 'content' | 'title'> {
	readonly event: UserEvent;
	readonly isOpen: boolean;
}

const EventDetails: FunctionComponent<EventDetailsProps> = ({
	handleClose: onHandleClosed,
	isOpen,
	event,
}): ReactElement => {
	return (
		<CustomDialog
			actions={ <EventEditButton id={ event.id } /> }
			content={ <EventDetailsContent event={ event } /> }
			handleClose={ onHandleClosed }
			isOpen={ isOpen }
			title='Event Details'
		/>
	);
};

export { EventDetails };