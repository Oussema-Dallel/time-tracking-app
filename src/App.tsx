import ErrorBoundary from './utils/UI/ErrorBoundary';
import { Layout } from './components/Layout/Layout';
import { Logo } from './components/Layout/Logo';
import LogoImage from './assets/react.svg?react';
import { NavigationLink } from './components/Layout/NavigationLink';
import type { FunctionComponent, ReactElement } from 'react';
import { Route, Routes } from 'react-router-dom';

const App: FunctionComponent = (): ReactElement => {
	return (
		<Layout
			links={ [
				/* eslint-disable react/jsx-key */
				<NavigationLink to="/">Go there</NavigationLink>
				, <NavigationLink to="/somewhere">Go Here</NavigationLink>,
				/* eslint-enable react/jsx-key */
			] }
			logoComponent={ <Logo LogoImage={ LogoImage } /> }
		>
			<ErrorBoundary>
				<Routes>
					<Route
						element={ <h1>This is the homepage</h1> }
						path="/"
					/>
				</Routes>
			</ErrorBoundary>
		</Layout>
	);
};

export default App;
