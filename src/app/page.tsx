"use client";
import { Card, CardContent, CardHeader, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
	const router = useRouter();

	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setLoading(false);
			router.push("/cheat/player");
		}, 1000);

		return () => {
			clearTimeout(timeout);
		};
	}, [router]);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<motion.div
				initial={{
					width: 0,
					height: 0,
					opacity: 0,
				}}
				animate={{
					width: 300,
					height: 600,
					opacity: 1,
				}}
				exit={{
					width: 0,
					height: 0,
					opacity: 0,
				}}
			>
				<Card>
					<CardHeader title="Castilian Is Loading..." />
					<CardContent>
						<CircularProgress className="mt-4" color="secondary" size={32} />
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}
