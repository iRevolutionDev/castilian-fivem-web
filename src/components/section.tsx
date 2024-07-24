import { Card, CardContent, CardHeader } from "@mui/material";
import type { FC, PropsWithChildren } from "react";

type ContainerProps = {
	title: string;
};

const Container: FC<PropsWithChildren<ContainerProps>> = ({
	children,
	title,
}) => {
	return (
		<Card>
			<CardHeader title={title} />
			<CardContent className="flex flex-col gap-2">{children}</CardContent>
		</Card>
	);
};

const Root: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className="h-full @container">
			<div className="grid grid-cols-2 gap-4">{children}</div>
		</div>
	);
};

export const Section = {
	Root,
	Container,
};
