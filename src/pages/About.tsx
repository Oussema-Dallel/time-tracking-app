import { styled } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';

const Container = styled('div')`
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: calc(100vh - 48px);
`;

const About: FunctionComponent = (): ReactElement => {
	return (
		<Container>
			<h1>This is the about page which unfortunately could not be completed on time</h1>
		</Container>
	);
};

export { About };