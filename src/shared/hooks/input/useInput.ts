import type { Input } from './Input';
import { useState } from 'react';

const useInput = <TData>(args: {
	initialValue: TData;
	showErrorImmediately?: boolean;
	validate?: (data: TData) => Error | undefined;
}): Input<TData> => {
	const [ value, setValue ] = useState<TData>(args.initialValue);
	const [ isShowingError, setIsShowingError ] = useState<boolean>(false);
	const error = args.validate?.(value);
	const isValid = error === undefined;

	const showError = (): void => {
		setIsShowingError(true);
	};

	const setValueInternal = (newValue: TData): void => {
		if (!isShowingError && (args.showErrorImmediately ?? false)) {
			setIsShowingError(true);
		}

		setValue(newValue);
	};

	return {
		value,
		handleValueChange: setValueInternal,
		handleShowError: showError,
		isValid,
		error: isShowingError ? error : undefined,
	};
};

export { useInput };
