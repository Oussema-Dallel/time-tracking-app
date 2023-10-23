import { reactColorToColor } from './reactColorToColor';

describe('reactColorToColor', () => {
	it('keeps channel values the same for every channel expect alpha.', () => {
		const inputColor = {
			r: 1,
			g: 2,
			b: 3,
		};

		const actualColor = reactColorToColor(inputColor);

		expect(actualColor[0]).toBe(1);
		expect(actualColor[1]).toBe(2);
		expect(actualColor[2]).toBe(3);
	});
	it('leaves out alpha if there is no alpha channel in the original color.', () => {
		const inputColor = {
			r: 1,
			g: 2,
			b: 3,
		};

		const actualColor = reactColorToColor(inputColor);

		expect(actualColor).toHaveLength(3);
		expect(actualColor[3]).toBeUndefined();
	});
	it('converts alpha channel from 0-1 to 0-255', () => {
		const inputColor = {
			r: 1,
			g: 2,
			b: 3,
			a: 0.2,
		};

		const actualColor = reactColorToColor(inputColor);

		expect(actualColor[3]).toBe(51);
	});
});
