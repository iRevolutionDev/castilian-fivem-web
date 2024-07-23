import { fetchDuiEvent } from "@/utils/fetch-dui-event";

type Event = {
	type: string;
	payload: unknown;
};

export const processEvent = async (event: unknown) => {
	const { type, payload } = event as Event;

	switch (type) {
		case "castilian:initialize":
			await fetchDuiEvent("castilian:initialized", payload);
			break;
		default:
			console.error("Unknown event type:", type);
			break;
	}
};
