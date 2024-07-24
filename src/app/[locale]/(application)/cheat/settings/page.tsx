"use client";
import { type Locale, locales } from "@/i18n/i18n.config";
import { List, ListItem, ListItemText, MenuItem, Select } from "@mui/material";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

export default function MiscPage() {
	const t = useTranslations();
	const router = useRouter();
	const currentLocale = useLocale() as Locale;

	const handleLocaleChange = (locale: Locale) => {
		document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; samesite=Lax`;
		router.refresh();
	};

	return (
		<div className="h-full">
			<List>
				<ListItem>
					<ListItemText
						primary={t("settings.language.title")}
						secondary={t("settings.language.description")}
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
						primary={t("settings.theme.title")}
						secondary={t("settings.theme.description")}
					/>
				</ListItem>
			</List>
		</div>
	);
}
