"use client";

import { createTheme } from "@mui/material";

export const defaultTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "transparent",
		},
	},
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: "1rem",
				},
			},
		},
	},
});
