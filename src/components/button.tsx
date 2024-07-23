import { fetchDuiEvent } from "@/utils/fetch-dui-event";
import { Box, Button as MuiButton } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

type ButtonProps = {
	onClick: string;
};

export const Button: FC<PropsWithChildren<ButtonProps>> = ({
	children,
	onClick,
}) => {
	const handleClick = () => {
		fetchDuiEvent(onClick);
	};

	return (
		<Box className="flex flex-row justify-between items-center">
			<MuiButton
				onClick={handleClick}
				variant="contained"
				color="primary"
				fullWidth
			>
				{children}
			</MuiButton>
		</Box>
	);
};
