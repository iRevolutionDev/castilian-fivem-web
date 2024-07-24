import { setResourceName } from "@/redux/features/resource-manager-slice";
import { store } from "@/redux/store";
import { fetchDuiEvent } from "@/utils/fetch-dui-event";

type Event = {
	type: string;
	payload: unknown;
};

export const processEvent = async (event: unknown) => {
	const { type, payload } = event as Event;
	const dispatch = store.dispatch;

	switch (type) {
		case "initialize": {
			const { resourceName } = payload as { resourceName: string };
			dispatch(setResourceName(resourceName));
			console.log("Resource name set:", resourceName);
			await fetchDuiEvent("initialized", payload);
			break;
		}
		default:
			console.error("Unknown event type:", type);
			break;
	}
};
