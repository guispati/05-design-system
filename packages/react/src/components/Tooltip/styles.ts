import * as Tooltip from '@radix-ui/react-tooltip';
import { styled, keyframes } from "../../styles";

export const TooltipProvider = styled(Tooltip.Provider, {});

const fadeIn = keyframes({
	from: {
	  	opacity: 0,
	},
	to: {
	  	opacity: 1,
	},
});
  
const fadeOut = keyframes({
	from: {
		opacity: 1,
	},
	to: {
		opacity: 0,
	},
});

export const TooltipContainer = styled(Tooltip.Root, {
	'&[data-state="closed"]': {
	  	animation: `${fadeOut} 200ms ease-out`,
	},
  
	'&[data-state="delayed-open"]': {
	  	animation: `${fadeIn} 200ms ease-out`,
	},
  
	'&[data-state="instant-open"]': {
	  	animation: `${fadeIn} 0ms ease-out`,
	},
});

export const TooltipTrigger = styled(Tooltip.Trigger, {});

export const TooltipPortal = styled(Tooltip.Portal, {});

export const TooltipContent = styled(Tooltip.Content, {
	background: '$gray900',
	borderRadius: '$sm',
	padding: '$3 $4',

	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
});

export const TooltipArrow = styled(Tooltip.Arrow, {
	fill: '$gray900',
});