"use client";

import type { ThemeOptions } from "@mui/material";

export const defaultTheme: ThemeOptions = {
	components: {
		MuiCard: {
			styleOverrides: {
				root: {
					borderRadius: "1rem",
				},
			},
		},
	},
};
