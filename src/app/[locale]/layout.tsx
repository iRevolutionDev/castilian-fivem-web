import "./globals.css";
import { locales } from "@/i18n/i18n.config";
import { Providers } from "@/providers/providers";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import type { ReactNode } from "react";

export function generateStaticParams() {
	return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
	children,
	params: { locale },
}: Readonly<{
	children: ReactNode;
	params: { locale: string };
}>) {
	unstable_setRequestLocale(locale);
	const messages = await getMessages();

	return (
		<html lang={locale}>
			<body>
				<NextIntlClientProvider messages={messages}>
					<Providers>{children}</Providers>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
