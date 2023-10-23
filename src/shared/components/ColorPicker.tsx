import type { Color } from '../utils/color/Color';
import type { ColorResult } from 'react-color';
import { colorToCss } from '../utils/color/colorToCss';
import { colorToReactColor } from '../utils/color/colorToReactColor';
import { reactColorToColor } from '../utils/color/reactColorToColor';
import { TwitterPicker } from 'react-color';
import { Button, Popover, styled } from '@mui/material';
import React, { useCallback } from 'react';

interface ColorPickerProperties {
	readonly color: Color;
	readonly onColorPicked: (color: Color) => void;
}

const ColorPickerButton = styled(Button)<{ $color: Color }>(({ $color }) => `
	height: 30px;
	min-width: 30px;
	background-color: ${colorToCss($color)};
	margin-top: 10px;
`);

const ColorPicker = ({
	color,
	onColorPicked,
}: ColorPickerProperties): React.ReactElement => {
	const [ anchorElement, setAnchorElement ] = React.useState<HTMLButtonElement | null>(
		null,
	);

	const handleClick = useCallback((event: React.MouseEvent<HTMLButtonElement>): void => {
		setAnchorElement(event.currentTarget);
	}, []);

	const handleClose = useCallback((): void => {
		setAnchorElement(null);
	}, []);

	const handleColorSelection = useCallback((selectedColor: ColorResult): void => {
		onColorPicked(reactColorToColor(selectedColor.rgb));
	}, [ onColorPicked ]);

	const open = Boolean(anchorElement);
	const id = open ? 'simple-popover' : undefined;

	return (
		<>
			<ColorPickerButton
				$color={ color }
				aria-label='upload picture'
				// @ts-expect-error The MUI types seem to be wrong here, or we should use a plain span.
				component='span'
				onClick={ handleClick }
			/>
			<Popover
				anchorEl={ anchorElement }
				anchorOrigin={
					{
						vertical: 'bottom',
						horizontal: 'left',
					}
				}
				id={ id }
				onClose={ handleClose }
				open={ open }
				transformOrigin={
					{
						vertical: 'top',
						horizontal: 'left',
					}
				}
			>
				<TwitterPicker
					color={ colorToReactColor(color) }
					onChange={ handleColorSelection }
				/>
			</Popover>
		</>
	);
};

export { ColorPicker };
