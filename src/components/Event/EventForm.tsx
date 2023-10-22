import { ColorPicker } from '../../shared/components/ColorPicker';
import { ControlledTextField } from '../../shared/components/ControlledTextField';
import { DatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { isNil } from '../../utils/isNil';
import { isRgbaColor } from '../../utils/color/Color';
import { useForm } from '../../hooks/useForm';
import { useInput } from '../../hooks/input/useInput';
import { addEvent, editEvent, setToBeEdited } from '../../store/slices/events';
import type { AppDispatch, AppState } from '../../store/store';
import { Button, styled, Typography } from '@mui/material';
import { type FunctionComponent, type ReactElement, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface EventFormProps {
	readonly handleClose: () => void;
}

const EventTime = styled('div')`
    display: flex;
    justify-content: space-between;
`;

const EventColor = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 1rem;
    width: fit-content;
`;

const EventForm: FunctionComponent<EventFormProps> = ({ handleClose }): ReactElement => {
	const dispatch = useDispatch<AppDispatch>();
	const editedEvent = useSelector((state: AppState) => state.events.toBeEdited);
	const prefilledFormContent = {
		description: editedEvent?.description ?? '',
		end: editedEvent?.end ?? dayjs(new Date()),
		start: editedEvent?.start ?? dayjs(new Date()),
		title: editedEvent?.title ?? '',
		color: editedEvent?.color ?? [ 0, 0, 0, 0 ],
	};

	const title = useInput({
		initialValue: prefilledFormContent.title,
		showErrorImmediately: true,
		validate (data) {
			if (data.length <= 1) {
				return new Error('Title must be at least 2 characters long');
			}

			if (data.length >= 50) {
				return new Error('Title must be at most 50 characters long');
			}
		},
	});

	const description = useInput({
		initialValue: prefilledFormContent.description,
		showErrorImmediately: true,
		validate (data) {
			if (data.length >= 500) {
				return new Error('Description must be at most 500 characters long');
			}
		},
	});

	const startTime = useInput({
		initialValue: prefilledFormContent.start,
		showErrorImmediately: true,
		validate (data) {
			if (!data.isValid()) {
				return new Error('Start time must be valid');
			}
		},
	});

	const endTime = useInput({
		initialValue: prefilledFormContent.end,
		showErrorImmediately: true,
		validate (data) {
			if (!data.isValid()) {
				return new Error('End time must be valid');
			}
		},
	});

	const color = useInput({
		initialValue: prefilledFormContent.color,
		showErrorImmediately: true,
		validate (data) {
			if (!isRgbaColor(data)) {
				console.log(data);

				return new Error('Color must be a valid rgb color');
			}
		},
	});

	const form = useForm([ title, description, color, startTime, endTime ]);

	// eslint-disable-next-line @typescript-eslint/naming-convention
	const handleSubmit = useCallback((event_: React.FormEvent<HTMLFormElement>): void => {
		event_.preventDefault();
		if (!form.isValid) {
			form.showErrors();
			handleClose();

			return;
		}
		if (isNil(editedEvent?.id)) {
			dispatch(addEvent({
				title: title.value,
				description: description.value,
				start: startTime.value,
				end: endTime.value,
				color: [ color.value[0], color.value[1], color.value[2], 50 ],
			}));
		} else {
			dispatch(editEvent({
				id: editedEvent.id,
				title: title.value,
				description: description.value,
				start: startTime.value,
				end: endTime.value,
				color: [ color.value[0], color.value[1], color.value[2], 50 ],
			}));
			dispatch(setToBeEdited(null));
		}
		handleClose();
	}, [ form, editedEvent?.id, handleClose, dispatch, title.value, description.value, startTime, endTime, color.value ]);

	const handleCancel = useCallback((): void => {
		handleClose();
	}, [ handleClose ]);

	return (
		<form onSubmit={ handleSubmit }>
			<ControlledTextField
				error={ title.error?.message }
				fieldName='title'
				label='Title'
				onBlur={ title.handleShowError }
				onChange={ title.handleValueChange }
				required={ true }
				value={ title.value }
			/>
			<EventTime>
				<DatePicker
					// @ts-expect-error this should be fine.
					onChange={ startTime.handleValueChange }
					onError={ startTime.handleShowError }
					value={ startTime.value }
				/>
				<DatePicker
					// @ts-expect-error this should be fine.
					onChange={ endTime.handleValueChange }
					onError={ endTime.handleShowError }
					value={ endTime.value }
				/>
			</EventTime>
			<ControlledTextField
				error={ description.error?.message }
				fieldName='description'
				label='Description'
				multiline={ true }
				onBlur={ description.handleShowError }
				onChange={ description.handleValueChange }
				required={ false }
				value={ description.value }
			/>
			<EventColor>
				<Typography variant='h6'>Color:</Typography>
				<ColorPicker
					color={ color.value }
					onColorPicked={ color.handleValueChange }
				/>
			</EventColor>
			<Button
				fullWidth={ true }
				name='submit'
				type='submit'
				variant='contained'
			>
				Save
			</Button>
			<Button
				fullWidth={ true }
				onClick={ handleCancel }
			>
				Cancel
			</Button>
		</form>
	);
};

export { EventForm };