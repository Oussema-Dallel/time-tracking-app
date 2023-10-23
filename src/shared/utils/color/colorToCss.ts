import type { Color } from './Color';
import { isRgbaColor, isRgbColor } from './Color';

const colorToCss = (color: Color): string => {
	if (isRgbColor(color)) {
		return `rgb(${color.join(',')})`;
	}

	if (isRgbaColor(color)) {
		return `rgba(${color.slice(0, 3).join(',')},${color[3] / 255})`;
	}

	throw new Error('Conversion for color type is not implemented.');
};

export { colorToCss };
