import App from './App';
import { renderWithProviders } from './shared/utils/testing/Rendering';

describe('<App />', () => {
	it('should render', async () => {
		const { container } = await renderWithProviders(<App />, { initialHistory: [ '/' ] });

		expect(container).toBeInTheDocument();
	});
});