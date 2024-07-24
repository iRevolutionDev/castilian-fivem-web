import { DirectionsCar, DirectionsRun } from "@mui/icons-material";
import type { ReactElement } from "react";

type Route = {
	name: string;
	icon: ReactElement;
	path: string;
};

export const ROUTES: Route[] = [
	{
		name: "player.title",
		icon: <DirectionsRun fontSize="large" />,
		path: "/cheat/player",
	},
	{
		name: "vehicles.title",
		icon: <DirectionsCar fontSize="large" />,
		path: "/cheat/vehicles",
	},
];
