"use client";
import { processEvent } from "@/core/events/processor";
import { type ReactNode, useEffect } from "react";

export default function ApplicationLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	useEffect(() => {
		const handleEvent = (event: MessageEvent) => {
			const { data } = event;

			processEvent(data).catch((error) => {
				console.error("Failed to process event:", error);
			});
		};

		window.addEventListener("message", handleEvent);
		return () => {
			window.removeEventListener("message", handleEvent);
		};
	}, []);

	return <div className="h-screen overflow-hidden">{children}</div>;
}
