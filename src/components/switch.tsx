import type { InputAction } from "@/@types/input-action";
import { fetchDuiEvent } from "@/utils/fetch-dui-event";
import { Box, Switch as SwitchMui, Typography } from "@mui/material";
import { type FC, type PropsWithChildren, useEffect, useState } from "react";

type SwitchProps = {
	action: string;
	onChanged?: (value: boolean) => void;
};

export const Switch: FC<PropsWithChildren<SwitchProps>> = ({
	children,
	action,
	onChanged,
}) => {
	const [disabled, setDisabled] = useState<boolean>(false);
	const [inputAction, setInputAction] = useState<InputAction>();

	const sendChange = async (value: boolean) => {
		await fetchDuiEvent("setInputAction", {
			action,
			value,
		});
	};

	const handleOnChange = async () => {
		const value = !inputAction?.value;
		setInputAction((prev) => ({
			...prev,
			value,
		}));
		await sendChange(value);
		onChanged?.(value);
	};

	useEffect(() => {
		fetchDuiEvent("getInputAction", {
			action,
		})
			.then((response) => {
				setInputAction(response);
			})
			.catch(() => {
				setDisabled(true);
			});
	}, [action]);

	const checked = inputAction?.value ?? false;

	return (
		<Box className="flex flex-row justify-between items-center">
			<Typography>{children}</Typography>
			<SwitchMui
				disabled={disabled}
				checked={checked as boolean}
				onChange={handleOnChange}
			/>
		</Box>
	);
};
