import type { Color } from './Color';
import type { RGBColor } from 'react-color';

const reactColorToColor = (color: RGBColor): Color => {
	if (color.a === undefined) {
		return [ color.r, color.g, color.b ];
	}

	return [
		color.r,
		color.g,
		color.b,
		Math.round(color.a * 255),
	];
};

export { reactColorToColor };