"use client";

export async function fetchDuiEvent<T>(type: string, payload?: T) {
	const response = await fetch("https://menu/castilian", {
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
