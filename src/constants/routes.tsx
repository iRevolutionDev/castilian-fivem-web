import { Code, DirectionsRun } from "@mui/icons-material";
import type { ReactElement } from "react";

type Route = {
	name: string;
	icon: ReactElement;
	path: string;
};

export const ROUTES: Route[] = [
	{
		name: "Player",
		icon: <DirectionsRun fontSize="large" />,
		path: "/cheat/player",
	},
	{
		name: "Exploits",
		icon: <Code fontSize="large" />,
		path: "/cheat/vehicles",
	},
];
