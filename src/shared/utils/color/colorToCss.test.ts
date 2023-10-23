import type { Color } from './Color';
import { colorToCss } from './colorToCss';

describe('colorToCss', () => {
	it('converts a color to css.', async () => {
		const color: Color = [ 250, 123, 9 ];
		const colorCss = colorToCss(color);

		expect(colorCss).toBe('rgb(250,123,9)');
	});

	it('converts another color to css.', async () => {
		const color: Color = [ 200, 23, 10 ];
		const colorCss = colorToCss(color);

		expect(colorCss).toBe('rgb(200,23,10)');
	});
});