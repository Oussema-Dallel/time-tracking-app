import type { NavLinkProps } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import type { FunctionComponent, PropsWithChildren, ReactElement } from 'react';

interface LayoutProps {
	readonly links: ReactElement<NavLinkProps>[];
	readonly logoComponent: ReactElement;
}

const LayoutContainer = styled('div')`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    align-items: center;
`;

const NavBar = styled('nav')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 0 2rem;
	width: 100%;
	height: 3rem;
	background-color: ${({ theme }): string => theme.palette.primary.main};
	color: white;
`;

const LeftSide = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
`;

const RightSide = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	align-items: center;
`;

const NavLinks = styled('div')`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Layout: FunctionComponent<LayoutProps & PropsWithChildren> = (
	{
		logoComponent,
		links,
		children,
	},
): ReactElement => {
	return (
		<LayoutContainer>
			<NavBar>
				<LeftSide>
					{ logoComponent }
				</LeftSide>
				<RightSide>
					<NavLinks>
						{ links.map((link) => (
							<link.type
								{ ...link.props }
								key={ link.props.to as string }
							/>
						)) }
					</NavLinks>
				</RightSide>
			</NavBar>
			{ children }
		</LayoutContainer>
	);
};

export { Layout };