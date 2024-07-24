import type {
	InitializeEventPayload,
	PushNotificationEventPayload,
} from "@/@types/events-payload";
import { setResourceName } from "@/redux/features/resource-manager-slice";
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
			await fetchDuiEvent("initialized", payload);
			break;
		}
		case "pushNotification": {
			const { message, type } = payload as PushNotificationEventPayload;
			enqueueSnackbar(message, { variant: type });
			break;
		}
		default:
			console.error("Unknown event type:", type);
			break;
	}
};
