"use client";
import type { InputAction } from "@/@types/input-action";
import { fetchDuiEvent } from "@/utils/fetch-dui-event";
import { Slider, Stack, Typography } from "@mui/material";
import { type FC, useEffect, useState } from "react";

type SliderInputProps = {
	label: string;
	action: string;
};

export const SliderInput: FC<SliderInputProps> = ({ label, action }) => {
	const [inputAction, setInputAction] = useState<InputAction>();

	const sendChange = async (value: number) => {
		await fetchDuiEvent("setInputAction", {
			action,
			value,
		});
	};

	useEffect(() => {
		fetchDuiEvent("getInputAction", {
			action,
		}).then((response) => {
			setInputAction(response);
		});
	}, [action]);

	return (
		<Stack
			direction="row"
			alignItems="center"
			justifyContent="space-between"
			spacing={2}
		>
			<Typography textAlign="center" variant="body1">
				{label}
			</Typography>
			<Slider
				onPointerDownCapture={(e) => {
					e.stopPropagation();
				}}
				aria-label={label}
				valueLabelDisplay="auto"
				value={inputAction?.value ?? 0}
				min={inputAction?.minValue}
				max={inputAction?.maxValue}
				step={inputAction?.step}
				onChange={async (_, value) => {
					setInputAction((prev) => ({
						...prev,
						value,
					}));
					await sendChange(value as number);
				}}
			/>
			<div className="flex flex-row items-center gap-2">
				<Typography variant="caption">{inputAction?.value ?? 0}</Typography>
			</div>
		</Stack>
	);
};
