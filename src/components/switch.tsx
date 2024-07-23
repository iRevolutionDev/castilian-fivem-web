import { Box, Switch as SwitchMui, Typography } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

type SwitchProps = {
	checked: boolean;
	onChange: () => void;
};

export const Switch: FC<PropsWithChildren<SwitchProps>> = ({
	children,
	checked,
	onChange,
}) => {
	return (
		<Box className="flex flex-row justify-between items-center">
			<Typography>{children}</Typography>
			<SwitchMui checked={checked} onChange={onChange} />
		</Box>
	);
};
