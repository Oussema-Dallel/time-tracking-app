import type { Color } from './Color';
import { isRgbaColor } from './Color';
import type { RGBColor } from 'react-color';

const colorToReactColor = (color: Color): RGBColor => {
	const reactColor: RGBColor = {
		r: color[0],
		g: color[1],
		b: color[2],
	};

	if (isRgbaColor(color)) {
		reactColor.a = color[3] / 255;
	}

	return reactColor;
};

export { colorToReactColor };
