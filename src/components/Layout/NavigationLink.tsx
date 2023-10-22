import { styled } from '@mui/material';
import type { FunctionComponent, ReactElement } from 'react';
import { NavLink, type NavLinkProps } from 'react-router-dom';

const CustomNavLink = styled(NavLink)`
    color: #fff;
	text-decoration: none;
	padding: 0.5rem 1rem;
	&:hover {
		color: #fff;
		animation: hover_animation .4s ease-out both;
	}
	@keyframes hover_animation {
		0% {
			background-color: hsla(0,0%,100%,.2);
		}
		100% {
			background-color: hsla(0,0%,100%,.1);
		}
	}
    &.active {
        text-decoration: underline;
    }
`;

const NavigationLink: FunctionComponent<NavLinkProps> = ({ children, ...props }): ReactElement => {
	return (
		<CustomNavLink { ...props }>
			{ children }
		</CustomNavLink>
	);
};

export { NavigationLink };