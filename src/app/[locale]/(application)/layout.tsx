"use client";
import type { PushNotificationEventPayload } from "@/@types/events-payload";
import { processEvent } from "@/core/events/processor";
import { useTranslations } from "next-intl";
import { enqueueSnackbar } from "notistack";
import { type ReactNode, useEffect } from "react";

export default function ApplicationLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	const t = useTranslations();

	useEffect(() => {
		const handleEvent = (event: MessageEvent) => {
			const { data } = event;

			processEvent(data).catch((error) => {
				console.error("Failed to process event:", error);
			});

			// Temporary solution for push notifications
			// to work with the translation system
			switch (data.type) {
				case "pushNotification": {
					const { message, type } =
						data.payload as PushNotificationEventPayload;
					enqueueSnackbar(t(message as never), { variant: type });
					break;
				}
			}
		};

		window.addEventListener("message", handleEvent);
		return () => {
			window.removeEventListener("message", handleEvent);
		};
	}, [t]);

	return <div className="h-screen overflow-hidden">{children}</div>;
}
