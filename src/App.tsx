import { NavigationLink } from './components/Layout/NavigationLink';
import type { FunctionComponent, ReactElement } from 'react';

const App: FunctionComponent = (): ReactElement => {
	return (
		<NavigationLink to="/">Go there</NavigationLink>
	);
};

export default App;
