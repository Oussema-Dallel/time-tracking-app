import { configureStore } from '../../store/store';
import { MemoryRouter } from 'react-router-dom';
import { Providers } from '../../Providers';
import type { Store } from '@reduxjs/toolkit';
import { storeSpy } from 'expect-redux';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';
import { render, type RenderResult } from './testUtils';

interface ProvidersConfiguration {
	initialHistory?: string[];
	store?: Store;
}

const renderWithProviders = async (
	ui: ReactElement,
	providersConfiguration: ProvidersConfiguration = {},
): Promise<RenderResult> => {
	const store = providersConfiguration.store ?? configureStore([ storeSpy ]);
	const initialHistory = providersConfiguration.initialHistory ?? [ '/' ];
	const Router: FunctionComponent<PropsWithChildren> = ({ children }) =>
		<MemoryRouter initialEntries={ initialHistory }>{ children }</MemoryRouter>
	;

	return render(
		<Providers
			// eslint-disable-next-line react/jsx-no-bind
			Router={ Router }
			store={ store }
		>
			{ ui }
		</Providers>,
	);
};

export { renderWithProviders };