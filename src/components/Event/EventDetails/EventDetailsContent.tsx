import { styled, Typography } from '@mui/material';
import type { UserEvent } from '../../../interfaces/UserEvent';
import type { FunctionComponent, ReactElement } from 'react';
import type { Color } from '../../../utils/color/Color';
import { colorToCss } from '../../../utils/color/colorToCss';

interface EventDetailsContentProps {
	readonly event: UserEvent;
}

const ColorPreview = styled('div')<{ color: Color }>`
    width: 50px;
    height: 50px;
    background-color: ${({ color }): string => colorToCss(color) };
`;

const HeaderSection = styled('div')`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    min-width: 500px;
`;

const LeftSide = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const RightSide = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
`;

const EventDetailsContent: FunctionComponent<EventDetailsContentProps> = ({ event }): ReactElement => {
	const { title, description, start, end, color } = event;

	return (
		<>
			<HeaderSection>
				<LeftSide>
					<Typography
						margin="1rem 0"
						variant='h2'
					>{ title }
					</Typography>
					<hr />
					<Typography variant='h6'>Start Time: </Typography>
					<Typography variant='body1'>{ start.toString() }</Typography>
					<Typography variant='h6'>End Time: </Typography>
					<Typography variant='body1'>{ end.toString() }</Typography>
					<Typography variant='h6'>Duration: </Typography>
					<Typography variant='body1'>{ end.toDate().getHours() - start.toDate().getHours() } hours</Typography>
				</LeftSide>
				<RightSide>
					<Typography variant='h6'>Color</Typography>
					<ColorPreview color={ color } />
				</RightSide>
			</HeaderSection>
			<hr />
			<Typography variant='h6'>Description</Typography>
			<Typography variant='body1'>{ description }</Typography>
		</>
	);
};

export { EventDetailsContent };