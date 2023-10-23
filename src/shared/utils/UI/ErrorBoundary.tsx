import { Component } from 'react';
import type { ErrorInfo, ReactNode } from 'react';

interface Properties {
	readonly children: ReactNode;
}

interface State {
	hasError: boolean;
}

class ErrorBoundary extends Component<Properties, State> {
	public constructor (props: Properties) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	public static getDerivedStateFromError (): State {
		return { hasError: true };
	}

	public componentDidCatch (error: Error, errorInfo: ErrorInfo): void {
		console.error('Uncaught error:', error, errorInfo);
	}

	public render (): ReactNode {
		const { hasError } = this.state;
		const { children } = this.props;

		if (hasError) {
			return <h1>Something went wrong! please refresh the page.</h1>;
		}

		return children;
	}

	public shouldComponentUpdate (): boolean {
		return true;
	}
}

export default ErrorBoundary;
