"use client";
import type { Theme } from "@/@types/theme";
import { useTheme } from "@/hooks/use-theme";
import { type Locale, locales } from "@/i18n/i18n.config";
import { List, ListItem, ListItemText, MenuItem, Select } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function MiscPage() {
	const t = useTranslations();
	const tSettings = useTranslations("settings");
	const router = useRouter();
	const currentLocale = useLocale() as Locale;
	const { setTheme, theme } = useTheme();

	const handleLocaleChange = (locale: Locale) => {
		document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=Lax`;
		router.refresh();
	};

	return (
		<div className="h-full">
			<List>
				<ListItem>
					<ListItemText
						primary={tSettings("language.title")}
						secondary={tSettings("language.description")}
					/>
					<Select
						value={currentLocale}
						onChange={(e) => handleLocaleChange(e.target.value as Locale)}
					>
						{locales.map((locale) => (
							<MenuItem key={locale} value={locale}>
								{t(`language.${locale}`)}
							</MenuItem>
						))}
					</Select>
				</ListItem>
				<ListItem>
					<ListItemText
						primary={tSettings("theme.title")}
						secondary={tSettings("theme.description")}
					/>
					<Select
						value={theme}
						onChange={(e) => setTheme(e.target.value as Theme)}
					>
						<MenuItem value="system">
							{tSettings("theme.options.system")}
						</MenuItem>
						<MenuItem value="light">
							{tSettings("theme.options.light")}
						</MenuItem>
						<MenuItem value="dark">{tSettings("theme.options.dark")}</MenuItem>
					</Select>
				</ListItem>
			</List>
		</div>
	);
}
