"use client";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader } from "@mui/material";

export default function PlayerPage() {
	return (
		<div className="h-full @container">
			<div className="grid grid-cols-2 gap-4">
				<Card>
					<CardHeader title="Player" />
					<CardContent className="flex flex-col gap-2">
						<Button event="revive">Revive</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
