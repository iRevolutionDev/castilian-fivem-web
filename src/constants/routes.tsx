import { Boy, Code } from "@mui/icons-material";
import type { ReactElement } from "react";

type Route = {
	name: string;
	icon: ReactElement;
	path: string;
};

export const ROUTES: Route[] = [
	{
		name: "Player",
		icon: <Boy />,
		path: "/cheat/player",
	},
	{
		name: "Exploits",
		icon: <Code />,
		path: "/cheat/exploits",
	},
];
