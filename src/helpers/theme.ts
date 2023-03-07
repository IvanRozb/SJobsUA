import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		common:{
			white: 'rgba(255,255,255,0.1)',
		},
		primary: {
			main: "#2c2c2c"
		},
		secondary: {
			main: "#202020",
		},
	},
	typography: {
		h1: {
			fontSize: '1.65rem',
			fontWeight: "700"
		}
	}
});
