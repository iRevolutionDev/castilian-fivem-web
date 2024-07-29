import type {
	InitializeEventPayload,
	PushNotificationEventPayload,
} from "@/@types/events-payload";
import { setOpenedMenu } from "@/redux/features/menu-slice";
import {
	setLoading,
	setPercentage,
	setResourceName,
} from "@/redux/features/resource-manager-slice";
import { store } from "@/redux/store";
import { fetchDuiEvent } from "@/utils/fetch-dui-event";
import { enqueueSnackbar } from "notistack";

type Event = {
	type: string;
	payload: unknown;
};

export const processEvent = async (event: unknown) => {
	const { type, payload } = event as Event;
	const dispatch = store.dispatch;

	switch (type) {
		case "initialize": {
			const { resourceName } = payload as InitializeEventPayload;
			dispatch(setResourceName(resourceName));
			dispatch(setLoading(false));
			dispatch(setPercentage(100));
			await fetchDuiEvent("initialized", payload);
			break;
		}
		case "pushNotification": {
			const { message, type } = payload as PushNotificationEventPayload;
			enqueueSnackbar(message, { variant: type });
			break;
		}
		case "toggleMenu": {
			const { opened } = payload as { opened: boolean };
			dispatch(setOpenedMenu(opened));
			break;
		}
		default:
			console.error("Unknown event type:", type);
			break;
	}
};
