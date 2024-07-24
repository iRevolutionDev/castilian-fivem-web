import { useTheme } from "@/hooks/use-theme";
import { darkTheme } from "@/theme/colors/dark-theme";
import { lightTheme } from "@/theme/colors/light-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useMediaQuery } from "@mui/system";
import { type ReactNode, useMemo } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	const { theme: currentTheme } = useTheme();
	const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

	const theme = useMemo(() => {
		return currentTheme === "system"
			? prefersDarkMode
				? darkTheme
				: lightTheme
			: currentTheme === "dark"
				? darkTheme
				: lightTheme;
	}, [currentTheme, prefersDarkMode]);

	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
