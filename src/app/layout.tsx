"use client";
import "./globals.css";
import { processEvent } from "@/core/events/processor";
import { Providers } from "@/providers/providers";
import { type ReactNode, useEffect } from "react";

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
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

	return (
		<html lang="en">
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
