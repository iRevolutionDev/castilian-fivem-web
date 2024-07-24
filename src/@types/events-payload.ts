import type { VariantType } from "notistack";

export type InitializeEventPayload = {
	resourceName: string;
};

export type PushNotificationEventPayload = {
	message: string;
	type: VariantType;
};
