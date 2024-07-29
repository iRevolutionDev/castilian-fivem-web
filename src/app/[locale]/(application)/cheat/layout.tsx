"use client";
import { Navbar } from "@/components/drawer";
import { useAppSelector } from "@/redux/hooks";
import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

export default function CheatWindow({
	children,
}: Readonly<{ children: ReactNode }>) {
	const pathname = usePathname();
	const containerRef = useRef<HTMLDivElement>(null);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const { open } = useAppSelector((state) => state.menu);

	useEffect(() => {
		if (!containerRef.current) return;

		setPosition({
			x: window.innerWidth / 2 - 640,
			y: window.innerHeight / 2 - 360,
		});
	}, []);

	return (
		<div className="w-full h-full overflow-hidden" ref={containerRef}>
			<AnimatePresence mode="wait">
				{open && (
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
							left: position.x,
							top: position.y,
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
									<motion.div
										key={pathname}
										initial={{
											opacity: 0,
											y: 20,
										}}
										animate={{
											opacity: 1,
											y: 0,
										}}
										exit={{
											opacity: 0,
											y: 20,
										}}
										transition={{ duration: 0.3 }}
										className="w-full h-full"
									>
										{children}
									</motion.div>
								</Box>
							</Navbar>
						</div>
					</Box>
				)}
			</AnimatePresence>
		</div>
	);
}
