"use client";
import { Navbar } from "@/components/drawer";
import { useWindowSize } from "@/hooks/use-window-size";
import { Box } from "@mui/material";
import { motion } from "framer-motion";
import { type ReactNode, useRef } from "react";

export default function CheatWindow({
	children,
}: Readonly<{ children: ReactNode }>) {
	const containerRef = useRef<HTMLDivElement>(null);
	const { width, height } = useWindowSize();

	return (
		<div className="h-screen overflow-hidden" ref={containerRef}>
			<Box
				component={motion.div}
				sx={{
					width: 1280,
					height: 720,
					backgroundColor: (theme) => theme.palette.background.paper,
					position: "absolute",
					boxShadow: 24,
				}}
				style={{
					top: (height - 720) / 2,
					left: (width - 1280) / 2,
				}}
				className="text-white overflow-hidden rounded-3xl"
				drag
				dragConstraints={containerRef}
				dragMomentum={false}
				initial={{
					opacity: 0,
				}}
				animate={{
					opacity: 1,
				}}
				exit={{
					opacity: 0,
				}}
			>
				<div className="relative h-full w-full flex-col">
					<Navbar>
						<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
							{children}
						</Box>
					</Navbar>
				</div>
			</Box>
		</div>
	);
}
