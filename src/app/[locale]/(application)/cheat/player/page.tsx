"use client";
import { Button } from "@/components/button";
import { Section } from "@/components/section";

export default function PlayerPage() {
	return (
		<Section.Root>
			<Section.Container title="Player">
				<Button event="revive">Revive</Button>
			</Section.Container>
		</Section.Root>
	);
}
