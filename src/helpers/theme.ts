import { createTheme } from "@mui/material";

export const theme = createTheme({
	palette: {
		common: {
			white: "rgba(255,255,255,0.8)"
		},
		primary: {
			main: "#2c2c2c",
			light: "#393939"
		},
		secondary: {
			main: "#f06292",
			dark: "#ad1457"
		},
		text: {
			secondary: "rgba(255,255,255,0.8)"
		}
	},
	typography: {
		fontFamily: "Open Sans, sans-serif",
		h1: {
			fontSize: "1.65rem",
			fontWeight: "700"
		},
		h2: {
			fontSize: "0.875rem"
		},
		button: {
			textTransform: "none",
			fontWeight: 700
		}
	},
	shape: {
		borderRadius: 30
	}
});
