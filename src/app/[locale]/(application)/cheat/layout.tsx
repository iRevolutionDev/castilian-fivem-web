"use client";
import { Navbar } from "@/components/drawer";
import { Box } from "@mui/material";
import type { ReactNode } from "react";

export default function CheatWindow({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<div className="h-screen">
			<div
				style={{
					width: 1280,
					height: 720,
				}}
				className="bg-neutral-950 text-white absolute inset-0 m-auto overflow-hidden rounded-3xl"
			>
				<div className="relative h-full w-full flex-col">
					<Navbar>
						<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
							{children}
						</Box>
					</Navbar>
				</div>
			</div>
		</div>
	);
}
