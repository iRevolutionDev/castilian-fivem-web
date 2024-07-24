import { locales } from "@/i18n/i18n.config";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
	locales,
	defaultLocale: "pt-br",
	localePrefix: "never",
});

export const config = {
	matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
