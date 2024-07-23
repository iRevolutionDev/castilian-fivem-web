import { defaultTheme } from "@/theme/colors/default-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import type { ReactNode } from "react";

export default function ThemeRegistry({ children }: { children: ReactNode }) {
	return (
		<AppRouterCacheProvider>
			<ThemeProvider theme={defaultTheme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}
