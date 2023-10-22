import type { ReactElement } from 'react';
import { useCallback } from 'react';
import { FormGroup, styled, TextField } from '@mui/material';

type Size = 'medium' | 'small' | undefined;
interface ControlledTextFieldProperties {
	readonly autofocus?: boolean;
	readonly className?: string;
	readonly disabled?: boolean;
	readonly error?: string;
	readonly fieldName: string;
	readonly isPassword?: boolean;
	readonly label: string;
	readonly multiline?: boolean;
	readonly onBlur?: () => void;
	readonly onChange: (value: string) => void;
	readonly placeholder?: string;
	readonly required: boolean;
	readonly size?: Size;
	readonly value: string;
}

const RequiredLabel = styled('label')<{ $isVisible: boolean }>`
  
	${({ $isVisible }): string => $isVisible
		? `
		:after {
				content: ' *';
				color: #f00;
			}
	`
		: ''}
	
`;

const StyledTextField = styled(TextField)<{ $sizeProp: Size }>`
  margin-top: ${({ $sizeProp }): string | undefined => {
		if ($sizeProp === undefined || $sizeProp === 'small') {
			return '4px';
		}
	}};
`;

export const ControlledTextField = ({
	error,
	fieldName,
	onBlur: handleBlur,
	onChange,
	label,
	isPassword,
	autofocus,
	required,
	size,
	placeholder,
	multiline,
	className,
	value,
	disabled,
}: ControlledTextFieldProperties): ReactElement => {
	const inputSize = size ?? 'small';
	const isPasswordInput = isPassword ?? false;
	const type = isPasswordInput ? 'password' : 'text';
	const isMultiline = multiline ?? false;
	const minRows = isMultiline ? 4 : 1;
	const hasError = error !== undefined;

	const handleChange = useCallback(
		(event: React.ChangeEvent<HTMLInputElement>): void => {
			onChange(event.target.value);
		},
		[ onChange ],
	);

	return (
		<FormGroup>
			<RequiredLabel
				$isVisible={ required && label.length > 0 ? true : false }
				htmlFor={ fieldName }
			>{ label }
			</RequiredLabel>
			<StyledTextField
				$sizeProp={ inputSize }
				autoFocus={ autofocus }
				className={ className }
				disabled={ disabled }
				error={ hasError }
				fullWidth={ true }
				helperText={ error }
				id={ fieldName }
				margin='normal'
				minRows={ minRows }
				multiline={ isMultiline }
				name={ fieldName }
				onBlur={ handleBlur }
				onChange={ handleChange }
				placeholder={ placeholder }
				required={ required }
				size={ inputSize }
				type={ type }
				value={ value }
				variant='outlined'
			/>
		</FormGroup>
	);
};
