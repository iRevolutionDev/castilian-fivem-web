"use client";

import { defaultTheme } from "@/theme/colors/default-theme";
import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
	palette: {
		mode: "light",
		background: {
			default: "transparent",
		},
	},
	...defaultTheme,
});
