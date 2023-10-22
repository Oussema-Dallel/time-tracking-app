import type { Input } from './input/Input';

const useForm = (
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	inputs: Input<any>[],
): {
		isValid: boolean;
		showErrors: () => void;
	} => {
	const showErrors = (): void => {
		for (const input of inputs) {
			input.handleShowError();
		}
	};
	const isValid = inputs.every(input => input.isValid);

	return {
		showErrors,
		isValid,
	};
};

export { useForm };
