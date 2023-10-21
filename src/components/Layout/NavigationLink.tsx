import { styled } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

const CustomNavLink = styled(NavLink)`
//TODO: decide on a consistent way to style active links
    color: red;
    background-color: ${ ({ className }): string => className === 'active' ? 'blue' : 'green' };
`;

const NavigationLink: FunctionComponent<NavLinkProps> = ({ children, ...props }): ReactElement => {
	return (
		<CustomNavLink { ...props }>
			{ children }
		</CustomNavLink>
	);
};

export { NavigationLink };