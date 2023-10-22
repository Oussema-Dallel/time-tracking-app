import { createTheme } from '@mui/material/styles';

const theme = createTheme({
	palette: {
		primary: {
			main: '#342456',
			dark: '#19122a',
			light: '#4c3a6f',
		},
		secondary: {
			main: '#3657f7',
			dark: '#1e3ba8',
			light: '#4c6ef5',
		},
	},
});

export { theme };