import { fetchDuiEvent } from "@/utils/fetch-dui-event";
import { Keyboard } from "@mui/icons-material";
import { Button, Tooltip } from "@mui/material";
import { useTranslations } from "next-intl";
import {
	type FC,
	type PropsWithChildren,
	useEffect,
	useMemo,
	useState,
} from "react";

type KeyBindProps = {
	action?: string;
	description?: string;
};

export const KeyBind: FC<PropsWithChildren<KeyBindProps>> = ({
	action,
	description,
}) => {
	const t = useTranslations();
	const [key, setKey] = useState<string | null>(null);

	const handleKeyBind = useMemo(() => {
		return async () => {
			const response = await fetchDuiEvent("getKeyBind", {
				action,
			});

			console.log(response);
			setKey(response.key);
		};
	}, [action]);

	const bindKey = async () => {
		setKey("...");
		const response = await fetchDuiEvent("bindKey", {
			action,
		});
		setKey(response.key);
	};

	useEffect(() => {
		handleKeyBind().catch(() => {
			setKey(null);
		});
	}, [handleKeyBind]);

	return (
		<Tooltip
			title={description ?? t("keybinding.default.description")}
			placement="bottom"
			arrow
		>
			<Button
				sx={{
					padding: 0,
					minWidth: 0,
				}}
				className="flex items-center justify-between w-12 h-12"
				variant="outlined"
				color="primary"
				size="small"
				onClick={bindKey}
			>
				{key ?? <Keyboard />}
			</Button>
		</Tooltip>
	);
};
