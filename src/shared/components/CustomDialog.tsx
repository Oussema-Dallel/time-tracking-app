import CloseIcon from '@mui/icons-material/Close';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, styled } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';

interface CustomDialogProps {
	readonly actions?: ReactElement;
	readonly content: ReactElement;
	readonly handleClose: () => void;
	readonly isOpen: boolean;
	readonly title: string;
}

const CloseButton = styled(IconButton)`
    position: absolute;
    right: 8px;
    top: 8px;
`;

const CustomDialog: FunctionComponent<CustomDialogProps> = ({
	isOpen,
	title,
	content,
	actions = undefined,
	handleClose,
}): ReactElement => {
	return (
		<Dialog
			onClose={ handleClose }
			open={ isOpen }
		>
			<DialogTitle>
				{ title }
				<CloseButton onClick={ handleClose }>
					<CloseIcon />
				</CloseButton>
			</DialogTitle>
			<DialogContent>
				{ content }
			</DialogContent>
			<DialogActions>
				{ actions }
			</DialogActions>
		</Dialog>
	);
};

export { CustomDialog };
export type { CustomDialogProps };