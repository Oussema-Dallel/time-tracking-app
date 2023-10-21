import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Providers } from './Providers.tsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store/store.ts';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
ReactDOM.createRoot(document.querySelector('#root')!).render(
	<React.StrictMode>
		<Providers
			Router={ BrowserRouter }
			store={ store }
		>
			<App />
		</Providers>
	</React.StrictMode>,
);
