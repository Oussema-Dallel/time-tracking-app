import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			// TODO: Change this to a more appropriate color
			main: '#d68b55',
			dark: '#a05c2c',
		},
		secondary: {
			// TODO: Change this to a more appropriate color
			main: '#3f51b5',
			dark: '#002984',
		},
	},
});

export { theme };