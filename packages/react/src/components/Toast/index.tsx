import { X } from "phosphor-react";
import { ComponentProps } from "react";
import { Heading } from "../Heading";
import { Text } from "../Text";
import { ToastClose, ToastContainer, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from "./styles";

export interface ToastProps extends ComponentProps<typeof ToastContainer> {
	title: string;
	description: string;
}

export function Toast({ title, description, ...props }: ToastProps) {
	return (
		<ToastProvider swipeDirection="right" label={title}>
			<ToastContainer {...props}>
				<ToastTitle asChild>
					<Heading size="sm">{title}</Heading>
				</ToastTitle>
				<ToastDescription asChild>
					<Text size="sm">{description}</Text>
				</ToastDescription>

				<ToastClose>
					<X size={20} />
				</ToastClose>
			</ToastContainer>

			<ToastViewport />
		</ToastProvider>
	);
}