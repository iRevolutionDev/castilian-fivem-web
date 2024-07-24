import { ROUTES } from "@/constants/routes";
import { Menu, Settings } from "@mui/icons-material";
import {
	Avatar,
	type CSSObject,
	Divider,
	IconButton,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	AppBar as MuiAppBar,
	type AppBarProps as MuiAppBarProps,
	Drawer as MuiDrawer,
	type Theme,
	Toolbar,
	Typography,
	styled,
} from "@mui/material";
import Link from "next/link";
import { type FC, type PropsWithChildren, useState } from "react";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	height: `calc(100% - ${theme.spacing(8)})`,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
	"& .MuiDrawer-paper": {
		position: "relative",
		overflowX: "hidden",
	},
}));

export const Navbar: FC<PropsWithChildren> = ({ children }) => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen((prev) => !prev);
	};

	return (
		<>
			<AppBar position="relative" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={toggleDrawer}
						edge="start"
						sx={{
							marginRight: 5,
						}}
					>
						<Menu />
					</IconButton>
					<Typography variant="h6" noWrap component="div">
						Castilian
					</Typography>
				</Toolbar>
			</AppBar>
			<div className="flex flex-row h-full">
				<Drawer variant="permanent" open={open}>
					<List>
						{ROUTES.map((route) => (
							<ListItemButton
								key={route.name}
								component={Link}
								href={route.path}
							>
								<ListItemIcon>{route.icon}</ListItemIcon>
								<ListItemText primary={route.name} />
							</ListItemButton>
						))}
					</List>
					<List sx={{ marginTop: "auto" }}>
						<Divider />
						<ListItem>
							<ListItemIcon>
								<Avatar
									alt="Revolution"
									src="https://avatars.githubusercontent.com/u/34239493"
								/>
							</ListItemIcon>
							<ListItemText primary="Revolution" secondary="Developer" />
						</ListItem>
						<ListItemButton component={Link} href="/cheat/settings">
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText primary="Settings" />
						</ListItemButton>
					</List>
				</Drawer>
				{children}
			</div>
		</>
	);
};
