import type { AppStore } from './store/store';
import { Provider } from 'react-redux';
import type { Store } from '@reduxjs/toolkit';
import { theme } from './theming/Theme';
import { ThemeProvider } from '@mui/material';
import type { ComponentType, FunctionComponent, PropsWithChildren, ReactElement } from 'react';

interface ProvidersProps {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	readonly Router: ComponentType<PropsWithChildren>;
	readonly store: Store<AppStore>;
}

const Providers: FunctionComponent<PropsWithChildren & ProvidersProps> = (
	{
		store,
		// eslint-disable-next-line @typescript-eslint/naming-convention
		Router,
		children,
	},
): ReactElement => {
	return (
		<Provider store={ store }>
			<Router>
				<ThemeProvider theme={ theme }>
					{ children }
				</ThemeProvider>
			</Router>
		</Provider>
	);
};

export { Providers };