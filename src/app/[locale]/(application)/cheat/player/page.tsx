"use client";
import { Section } from "@/components/section";
import { SliderInput } from "@/components/slider-input";
import { Switch } from "@/components/switch";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function PlayerPage() {
	const [invisible, setInvisible] = useState(false);
	const t = useTranslations("player");

	return (
		<Section.Root>
			<Section.Container title={t("sections.modifiers.title")}>
				<SliderInput
					label={t("sections.modifiers.fields.health")}
					action="localplayer_health"
				/>
				<SliderInput
					label={t("sections.modifiers.fields.armour")}
					action="localplayer_armour"
				/>
				<SliderInput
					label={t("sections.modifiers.fields.velocity_multiplier")}
					action="localplayer_velocity_multiplier"
				/>
				<SliderInput
					label={t("sections.modifiers.fields.run_multiplier")}
					action="localplayer_run_multiplier"
				/>
			</Section.Container>
			<Section.Container title={t("sections.wide.title")}>
				<Switch action="god_mode">{t("sections.wide.fields.god_mode")}</Switch>
				<Switch action="invisible" onChanged={setInvisible}>
					{t("sections.wide.fields.invisible")}
				</Switch>
				{invisible && (
					<Switch action="locally_visible">
						{t("sections.wide.fields.locally_visible")}
					</Switch>
				)}
			</Section.Container>
		</Section.Root>
	);
}
