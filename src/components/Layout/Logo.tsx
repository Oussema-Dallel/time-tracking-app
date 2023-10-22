import type { ComponentType, FunctionComponent, ReactElement, SVGProps } from 'react';
import { IconButton, SvgIcon } from '@mui/material';

interface LogoProps {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	readonly LogoImage: ComponentType<SVGProps<SVGSVGElement>>;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const Logo: FunctionComponent<LogoProps> = ({ LogoImage }): ReactElement => {
	return (
		<IconButton>
			<SvgIcon>
				<LogoImage />
			</SvgIcon>
		</IconButton>
	);
};

export { Logo };
export type { LogoProps };