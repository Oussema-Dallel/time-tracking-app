import { Dashboard } from './pages/Dashboard';
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
				<NavigationLink to="/">Dashboard</NavigationLink>
				, <NavigationLink to="/about">About</NavigationLink>,
				/* eslint-enable react/jsx-key */
			] }
			logoComponent={ <Logo LogoImage={ LogoImage } /> }
		>
			<ErrorBoundary>
				<Routes>
					<Route
						element={ <Dashboard /> }
						path="/"
					/>
				</Routes>
			</ErrorBoundary>
		</Layout>
	);
};

export default App;
