import { styled } from '@mui/material/styles';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

const LayoutContainer = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const Layout: FunctionComponent<PropsWithChildren> = ({ children }): ReactElement => {
	return (
		<LayoutContainer>
			<NavBar>
				<LeftSide>
					<Logo />
				</LeftSide>
				<RightSide>
					<NavLinks>
						<NavLink href="/">Home</NavLink>
						<NavLink href="/about">About</NavLink>
					</NavLinks>
				</RightSide>
			</NavBar>
			{ children }
		</LayoutContainer>
	);
};

export { Layout };