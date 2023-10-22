import type { Color } from './Color';
import { colorToReactColor } from './colorToReactColor';

describe('colorToReactColor', () => {
	it('keeps channel values the same for every channel expect alpha.', () => {
		const inputColor: Color = [ 1, 2, 3 ];

		const actualColor = colorToReactColor(inputColor);

		expect(actualColor.r).toBe(1);
		expect(actualColor.g).toBe(2);
		expect(actualColor.b).toBe(3);
	});
	it('leaves out alpha if there is no alpha channel in the original color.', () => {
		const inputColor: Color = [ 1, 2, 3 ];

		const actualColor = colorToReactColor(inputColor);

		expect(actualColor.a).toBeUndefined();
	});
	it('converts alpha channel from 0-255 to 0-1', () => {
		const inputColor: Color = [
			1,
			2,
			3,
			51,
		];

		const actualColor = colorToReactColor(inputColor);

		expect(actualColor.a).toStrictEqual(0.2);
	});
});
