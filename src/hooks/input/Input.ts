interface Input<TData> {
	error: Error | undefined;
	handleShowError: () => void;
	handleValueChange: (newValue: TData) => void;
	isValid: boolean;
	value: TData;
}

export type { Input };
