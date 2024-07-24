"use client";
import { store } from "@/redux/store";

export async function fetchDuiEvent<T>(type: string, payload?: T) {
	const resourceName = store.getState().resourceManager.resourceName;

	if (!resourceName) {
		throw new Error("Resource name is not set");
	}

	const response = await fetch(`https://${resourceName}/castilian`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			type,
			payload,
		}),
	});

	return response.json();
}
