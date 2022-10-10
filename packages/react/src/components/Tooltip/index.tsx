import { ComponentProps } from "react";
import { Text } from "../Text";
import { TooltipArrow, TooltipContainer, TooltipContent, TooltipPortal, TooltipProvider, TooltipTrigger } from "./styles";

export interface TooltipProps extends ComponentProps<typeof TooltipContainer> {
	content: string;
}

export function Tooltip({ content, children, ...props }: TooltipProps) {
	return (
		<TooltipProvider>
			<TooltipContainer {...props}>
				<TooltipTrigger asChild>
					{children}
				</TooltipTrigger>

				<TooltipPortal>
					<TooltipContent side="top">
						<Text size="sm">{content}</Text>

						<TooltipArrow />
					</TooltipContent>
				</TooltipPortal>
			</TooltipContainer>
		</TooltipProvider>
	);
}

Tooltip.displayName = "Tooltip";