import { Button, Tooltip } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

type KeyBindProps = {
	key?: string;
	action?: string;
	description?: string;
};

export const KeyBind: FC<PropsWithChildren<KeyBindProps>> = ({
	key,
	action,
	description,
}) => {
	return (
		<Tooltip title={description ?? "Click to bind"} placement="bottom" arrow>
			<Button
				sx={{
					padding: 0,
					minWidth: 0,
				}}
				className="flex items-center justify-between w-12 h-12"
				variant="outlined"
				color="primary"
				size="small"
			>
				{key ?? "None"}
			</Button>
		</Tooltip>
	);
};
