"use client";
import { useAppSelector } from "@/redux/hooks";
import { Downloading } from "@mui/icons-material";
import { Card, CardContent, LinearProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
	const router = useRouter();
	const t = useTranslations("loading");
	const { loading, percentage } = useAppSelector(
		(state) => state.resourceManager,
	);

	useEffect(() => {
		if (loading) return;

		router.push("/cheat/player");
	}, [loading, router.push]);

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<motion.div
				initial={{
					width: 0,
					height: 0,
					opacity: 0,
				}}
				animate={{
					width: "auto",
					height: "auto",
					opacity: 1,
				}}
				exit={{
					width: 0,
					height: 0,
					opacity: 0,
				}}
				transition={{
					duration: 0.5,
				}}
				className="flex flex-col items-center justify-center"
			>
				<Card className="w-full h-full">
					<div className="flex flex-row justify-between items-center px-5 pt-5">
						<Typography variant="h5">Castilian</Typography>
						<Typography variant="body1">v0.0.0</Typography>
					</div>

					<CardContent>
						<div className="flex flex-col gap-5">
							<div className="flex flex-row items-center justify-center gap-5">
								<div className="bg-green-700 p-2 rounded-full">
									<Downloading
										className="text-white"
										sx={{
											fontSize: 40,
										}}
									/>
								</div>
								<div className="flex flex-col justify-center">
									<Typography variant="h6">
										{t("title.communicating")}
									</Typography>
									<Typography
										variant="caption"
										sx={{
											maxWidth: 300,
											color: "text.secondary",
										}}
									>
										{t("message")}
									</Typography>
								</div>
							</div>
							<div className="flex flex-col gap-2">
								<div className="flex flex-row items-center justify-between gap-5">
									<Typography variant="body1">
										{t("progress.components")}
									</Typography>
									<Typography variant="body1">{percentage}%</Typography>
								</div>
								<LinearProgress
									sx={{
										width: "100%",
									}}
									color="secondary"
									variant="indeterminate"
								/>
							</div>
						</div>
					</CardContent>
				</Card>
			</motion.div>
		</div>
	);
}
