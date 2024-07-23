import ThemeRegistry from "@/theme/theme-registry";
import type { FC, PropsWithChildren } from "react";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
	return <ThemeRegistry>{children}</ThemeRegistry>;
};
