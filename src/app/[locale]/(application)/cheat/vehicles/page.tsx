"use client";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { SliderInput } from "@/components/slider-input";
import { useTranslations } from "next-intl";

export default function VehiclesPage() {
	const t = useTranslations("vehicles");

	return (
		<Section.Root>
			<Section.Container title={t("sections.general.title")}>
				<Button event="repair_vehicle">
					{t("sections.general.fields.repair")}
				</Button>
				<Button event="flip_vehicle">
					{t("sections.general.fields.flip")}
				</Button>
				<Button event="clean_vehicle">
					{t("sections.general.fields.clean")}
				</Button>
				<SliderInput
					label={t("sections.general.fields.gravity")}
					action="vehicle_gravity"
				/>
				<SliderInput
					label={t("sections.general.fields.boost")}
					action="vehicle_boost"
				/>
				<Button event="vehicle_boost">
					{t("sections.general.fields.boost")}
				</Button>
				<Button event="unlock_nearby_vehicle">
					{t("sections.general.fields.nearby_unlock")}
				</Button>
			</Section.Container>
		</Section.Root>
	);
}
