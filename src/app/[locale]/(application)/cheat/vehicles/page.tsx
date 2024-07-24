"use client";
import { Section } from "@/components/section";
import { useTranslations } from "next-intl";

export default function VehiclesPage() {
	const t = useTranslations("vehicles");

	return (
		<Section.Root>
			<Section.Container title={t("title")}></Section.Container>
		</Section.Root>
	);
}
