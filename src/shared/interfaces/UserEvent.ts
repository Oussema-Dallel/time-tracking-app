import type { Color } from '../utils/color/Color';
import type { Dayjs } from 'dayjs';

interface UserEvent {
	color?: Color;
	description: string;
	end: Dayjs;
	id: number;
	start: Dayjs;
	title: string;
}

export type { UserEvent };