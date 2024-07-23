"use client";
import { Button } from "@/components/button";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

export default function PlayerPage() {
	return (
		<div className="h-full">
			<Grid container spacing={2}>
				<Grid item xs={12} md={6} lg={4}>
					<Card>
						<CardHeader title="Player" />
						<CardContent className="space-y-2">
							<Button onClick="event">Heal Player</Button>
							<Button onClick="event">Suicide</Button>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</div>
	);
}
