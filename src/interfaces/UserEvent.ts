import type { Color } from '../utils/color/Color';

interface UserEvent {
	color?: Color;
	description: string;
	end: Date;
	id: number;
	start: Date;
	title: string;
}

export type { UserEvent };