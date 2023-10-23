import { z } from 'zod';

const colorChannelSchema = z.
	number().
	int('color channel must be an integer').
	gte(0, 'color channel must be between 0 and 255').
	lte(255, 'color channel must be between 0 and 255');
const rgbColorSchema = z.tuple([ colorChannelSchema, colorChannelSchema, colorChannelSchema ]);
const rgbaColorSchema = z.tuple([
	colorChannelSchema,
	colorChannelSchema,
	colorChannelSchema,
	colorChannelSchema,
]);

const colorSchema = z.union([ rgbColorSchema, rgbaColorSchema ]);

type RgbColor = z.infer<typeof rgbColorSchema>;
type RgbaColor = z.infer<typeof rgbaColorSchema>;

type Color = z.infer<typeof colorSchema>;

const isRgbColor = (color: Color): color is RgbColor => {
	const { success } = rgbColorSchema.safeParse(color);

	return success;
};

const isRgbaColor = (color: Color): color is RgbaColor => {
	const { success } = rgbaColorSchema.safeParse(color);

	return success;
};

export { isRgbColor, isRgbaColor, colorSchema };
export type { Color };
