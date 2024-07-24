"use client";

import { defaultTheme } from "@/theme/colors/default-theme";
import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
	palette: {
		mode: "dark",
		background: {
			default: "transparent",
		},
	},
	...defaultTheme,
});
