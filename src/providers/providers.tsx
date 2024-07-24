"use client";
import { store } from "@/redux/store";
import ThemeRegistry from "@/theme/theme-registry";
import type { FC, PropsWithChildren } from "react";
import { Provider } from "react-redux";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<ThemeRegistry>{children}</ThemeRegistry>
		</Provider>
	);
};
